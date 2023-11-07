const express = require("express");
const jwt = require("jsonwebtoken");
const { RestOwner, Confirm, User } = require("../db/models");

const validateRooter = express.Router();
const jwtSecretKey = "your-secret-key"; // секретный ключ

validateRooter.post("/", async (req, res) => {
  const { randomString } = req.body;
  // console.log("randomString", randomString);
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
    await codeEntry.destroy();
    const token = jwt.sign(
      { userName: ownerNew.name, restOwnerId: ownerNew.id },
      jwtSecretKey,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ token, isOwner: true });
  } else {
    const userNew = await User.findByPk(codeEntry.userId);
    userNew.active = true;
    await userNew.save();
    req.session.user = {
      name: userNew.name,
      id: userNew.id,
    };
    await codeEntry.destroy();
    const token = jwt.sign(
      { userName: userNew.name, userId: userNew.id },
      jwtSecretKey,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ token });
  }
});

module.exports = validateRooter;
