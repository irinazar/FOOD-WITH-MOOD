const express = require("express");
const jwt = require("jsonwebtoken");
const { RestOwner, Confirm, User } = require("../db/models");

const validateRooter = express.Router();
const jwtSecretKey = "your-secret-key"; // секретный ключ

validateRooter.post("/", async (req, res) => {
  const { randomString } = req.body;
  if (!randomString) return res.sendStatus(400);

  const codeEntry = await Confirm.findOne({
    where: {
      randomString: randomString,
    },
  });

  if (!codeEntry) {
    return res.sendStatus(403);
  }

  if (!codeEntry.userId) {
    const ownerNew = await RestOwner.findByPk(codeEntry.restOwnerId);
    ownerNew.active = true;
    await ownerNew.save();
    req.session.user = {
      name: ownerNew.name,
      id: ownerNew.id,
      isOwner: true,
    };
    await req.session.save();
    await codeEntry.destroy();

    const owner = JSON.parse(JSON.stringify(ownerNew));
    delete owner.password;
    owner.isOwner = true;
    return res.status(200).json(owner);
  } else {
    console.log("else");
    const userNew = await User.findByPk(codeEntry.userId);
    userNew.active = true;
    await userNew.save();
    req.session.user = {
      name: userNew.name,
      id: userNew.id,
    };
    await codeEntry.destroy();

    const user = JSON.parse(JSON.stringify(userNew));
    delete user.password;
    return res.status(200).json(user);
  }
});

module.exports = validateRooter;
