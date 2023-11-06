const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); // Импорт cookie-parser
const { RestOwner, Confirm } = require("../db/models");
const sendConfirmationCodeEmail = require("../mailer/sendConfirmationCodeEmail"); // Добавлен импорт функции отправки электронной почты

const authOwnerRouter = express.Router();

const jwtSecretKey = "your-secret-key"; // секретный ключ

function generateConfirmationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Функция для проверки валидности токена
function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }
    next();
    //логика по возобновлению доступа (рефреш)???
  });
}

authOwnerRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!(name && email && password)) return res.sendStatus(400);

  const confirm = generateConfirmationCode();

  const [user, created] = await RestOwner.findOrCreate({
    where: { email },
    defaults: {
      name,
      password: await bcrypt.hash(password, 10),
      active: false,
    },
  });

  if (!created) {
    console.log("Code entry not found for randomString:", randomString);
    return res.sendStatus(403);
  }

  const codeEntry = await Confirm.create({
    randomString: confirm,
    restOwnerId: user.id,
  });

  sendConfirmationCodeEmail(email, confirm);

  return res.sendStatus(201);
});

// authOwnerRouter.post("/code", async (req, res) => {
//   const { randomString } = req.body;
//   console.log("randomString", randomString);
//   if (!randomString) return res.sendStatus(400);

//   const codeEntry = await Confirm.findOne({
//     where: {
//       randomString: randomString,
//     },
//   });

//   if (!codeEntry) {
//     return res.sendStatus(403);
//   }
//   if (!codeEntry.userId) {
//     const ownerNew = await RestOwner.findByPk(codeEntry.restOwnerId);
//     ownerNew.active = true;
//     await ownerNew.save();
//     req.session.user = {
//       name: ownerNew.name,
//       id: ownerNew.id,
//     };
//     await codeEntry.destroy();
//     const token = jwt.sign(
//       { userName: ownerNew.name, restOwnerId: ownerNew.id },
//       jwtSecretKey,
//       {
//         expiresIn: "1h",
//       }
//     );
//     res.cookie("token", token, { httpOnly: true });
//   } else {
//     const usernew = await User.findByPk(codeEntry.userId);
//     usernew.active = true;
//     await usernew.save();
//     req.session.user = {
//       name: usernew.name,
//       id: usernew.id,
//     };
//     await codeEntry.destroy();
//     const token = jwt.sign(
//       { userName: usernew.name, userId: usernew.id },
//       jwtSecretKey,
//       {
//         expiresIn: "1h",
//       }
//     );
//     res.cookie("token", token, { httpOnly: true });
//   }

//   // Установка токена в куки
//   // res.cookie("token", token, { httpOnly: true });

//   //уточнить только ссесия создается
//   return res.status(200).json({ token });
// });

authOwnerRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await RestOwner.findOne({
        where: { email },
      });
      if (!(await bcrypt.compare(password, user.password))) {
        return res.sendStatus(401);
      }

      const sessionUser = JSON.parse(JSON.stringify(user));
      delete sessionUser.password;
      req.session.user = sessionUser;
      return res.json(sessionUser);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

authOwnerRouter.get("/check", (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(400);
});

authOwnerRouter.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("token").sendStatus(200);
});

module.exports = authOwnerRouter;
