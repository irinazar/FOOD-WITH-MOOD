// const userRouter = express.Router();

// module.exports = userRouter;
const express = require("express");
const bcrypt = require("bcrypt");
const { User, Confirm } = require("../models");
const sendConfirmationCodeEmail = require("../mailer/sendConfirmationCodeEmail"); // Добавлен импорт функции отправки электронной почты

const userRouter = express.Router();

function generateConfirmationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!(name && email && password)) return res.sendStatus(400);

  const confirm = generateConfirmationCode();
  // генерация кода подтверждения

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

  // Отправка кода подтверждения на почту
  sendConfirmationCodeEmail(email, confirm);
  return res.sendStatus(201);
});

userRouter.post("/code", async (req, res) => {
  const { randomString } = req.body;
  if (!randomString) return res.sendStatus(400);

  const codeEntry = await Confirm.findOne({
    where: {
      randomString: randomString,
    },
  });

  if (!codeEntry) {
    return res.sendStatus(403); //
  }

  const usernew = await User.findByPk(codeEntry.userId);
  usernew.active = true;
  await usernew.save();
  req.session.user = {
    name: usernew.name,
    id: usernew.id,
  };

  await codeEntry.destroy();

  return res.sendStatus(200);
});


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
  res.clearCookie("sid").sendStatus(200);
});

module.exports = userRouter;

