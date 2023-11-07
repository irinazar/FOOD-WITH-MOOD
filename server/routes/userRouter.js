const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); // Импорт cookie-parser
const { User, Confirm } = require("../db/models");
const sendConfirmationCodeEmail = require("../mailer/sendConfirmationCodeEmail"); // Добавлен импорт функции отправки электронной почты

const userRouter = express.Router();

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

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!(name && email && password)) return res.sendStatus(400);

  const confirm = generateConfirmationCode();

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      name,
      password: await bcrypt.hash(password, 10),
      active: false,
    
    },
  });

  if (!created) return res.sendStatus(403);

  const codeEntry = await Confirm.create({
    randomString: confirm,
    userId: user.id,
  });

  sendConfirmationCodeEmail(email, confirm);

  const token = jwt.sign(
    { userName: user.name, userId: user.id },
    jwtSecretKey,
    {
      expiresIn: "1h",
    }
  );

  // Установка токена в куки
  res.cookie("token", token, { httpOnly: true });

  return res.status(201).json({ token });
});

// userRouter.post("/code", async (req, res) => {
//   const { randomString } = req.body;
//   if (!randomString) return res.sendStatus(400);

//   const codeEntry = await Confirm.findOne({
//     where: {
//       randomString: randomString,
//     },
//   });

//   if (!codeEntry) {
//     return res.sendStatus(403);
//   }

//   const usernew = await User.findByPk(codeEntry.userId);
//   usernew.active = true;
//   await usernew.save();
//   req.session.user = {
//     name: usernew.name,
//     id: usernew.id,
//   };

//   await codeEntry.destroy();

//   const token = jwt.sign(
//     { userName: usernew.name, userId: usernew.id },
//     jwtSecretKey,
//     {
//       expiresIn: "1h",
//     }
//   );

//   // Установка токена в куки
//   res.cookie("token", token, { httpOnly: true });

//   //уточнить только ссесия создается
//   return res.status(200).json({ token });
// });

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
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

userRouter.get("/check", (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

userRouter.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("token").sendStatus(200);
});

module.exports = userRouter;
