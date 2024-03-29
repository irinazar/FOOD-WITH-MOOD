const express = require("express");
const bcrypt = require("bcrypt");
const { RestOwner, Confirm } = require("../db/models");
const sendConfirmationCodeEmail = require("../mailer/sendConfirmationCodeEmail"); // Добавлен импорт функции отправки электронной почты

const authOwnerRouter = express.Router();

function generateConfirmationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

authOwnerRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!(name && email && password)) return res.sendStatus(400);
  try {
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
      return res.sendStatus(403);
    }

    const codeEntry = await Confirm.create({
      randomString: confirm,
      restOwnerId: user.id,
    });

    sendConfirmationCodeEmail(email, confirm);
    // const sessionUser = JSON.parse(JSON.stringify(user));
    // delete sessionUser.password;
    // req.session.user = sessionUser;
    // req.session.user.isOwner = true;

    // return res.status(201).json(sessionUser);
    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
});

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

      if (user) {
        const confirm = await Confirm.findOne({
          where: { restOwnerId: user.id },
        });

        if (confirm) {
          confirm.destroy();
          user.destroy();
        } else {
          const sessionUser = JSON.parse(JSON.stringify(user));
          delete sessionUser.password;
          req.session.user = sessionUser;
          return res.json(sessionUser);
        }
      }
    } catch (e) {
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
  res.clearCookie("sid").sendStatus(200);
});

module.exports = authOwnerRouter;
