const bcrypt = require("bcrypt");
const lkRouter = require("express").Router();
const {
  Country,
  RestOwner,
  User,
  Comment,
  Restaurant,
  Preference,
  CommentReply,
} = require("../db/models");
const upload = require("../middlewares/multerLoad");
const sharp = require("sharp");
const { Op } = require("sequelize");
const fs = require("fs").promises;

lkRouter.get("/country", async (req, res) => {
  try {
    const allCountry = await Country.findAll();
    res.send(allCountry);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

lkRouter.get("/owner/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await RestOwner.findByPk(id, {
      include: Restaurant,
    });

    res.send(owner);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

lkRouter.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: Preference,
    });

    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

lkRouter.post("/userupdate/:id", upload.single("file"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, telephone, email, countryId } = req.body;

    const existingUser = await User.findByPk(id);

    if (existingUser) {
      const updatedFields = {};

      if (name) {
        updatedFields.name = name;
      }

      if (telephone) {
        updatedFields.telephone = telephone;
      }

      if (email) {
        updatedFields.email = email;
      }

      if (req.file) {
        const name = `${Date.now()}.webp`;
        const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
        await fs.writeFile(`./public/img/${name}`, outputBuffer);
        updatedFields.avatar = name;
      }

      if (countryId) {
        const countries = countryId.split(" ");
        const newcountries = countries.map((el) => +el);
        await Preference.destroy({
          where: { userId: id },
        });

        const preferense = [];
        for (country of newcountries) {
          preferense.push({ userId: id, countryId: country });
        }
        await Preference.bulkCreate(preferense);
      }
      await existingUser.update(updatedFields);

      const user = await User.findByPk(id, {
        include: Preference,
      });

      // const user = await User.findByPk(id, {
      //   include: [
      //     {
      //       model: Preference,
      //       include: [Country],
      //     },
      //   ],
      // });

      res.send(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.sendStatus(400);
  }
});

lkRouter.post("/ownerupdate/:id", upload.single("file"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, telephone, email } = req.body;

    const existingUser = await RestOwner.findByPk(id);

    if (existingUser) {
      const updatedFields = {};

      if (name) {
        updatedFields.name = name;
      }

      if (telephone) {
        updatedFields.telephone = telephone;
      }

      if (email) {
        updatedFields.email = email;
      }

      if (req.file) {
        const name = `${Date.now()}.webp`;
        const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
        await fs.writeFile(`./public/img/${name}`, outputBuffer);
        updatedFields.avatar = name;
      }

      await existingUser.update(updatedFields);

      const owner = await RestOwner.findByPk(id);

      res.send(owner);
    } else {
      return res.status(404).json({ message: "Owner not found" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.sendStatus(400);
  }
});

lkRouter.post("/newrestaurant", upload.array("file", 3), async (req, res) => {
  console.log(req.body, "body=====================");
  console.log(req.file, "fileeeeeeeeeee11111111111");
  try {
    const { id, title, adress, countryId, description, coordX, coordY } =
      req.body;
    if (
      !id ||
      !title ||
      !adress ||
      !countryId ||
      !description ||
      !coordX ||
      !coordY
    ) {
      res.sendStatus(606);
    }

    const newRestaurant = await Restaurant.create({
      title,
      adress,
      countryId,
      description,
      coordX,
      coordY,
      status: "Pending",
      restOwnerId: id,
    });

    if (newRestaurant) {
      const newRestaurantId = newRestaurant.id;
      //! МУЛЬТЕР
      if (req.file) {
        const images = [];

        for (const file of req.file) {
          const name = `${Date.now()}.webp`;
          const outputBuffer = await sharp(file.buffer).webp().toBuffer();
          await fs.writeFile(`./public/img/${name}`, outputBuffer);

          images.push({ img: name, restId: newRestaurantId });
        }

        await Picture.bulkCreate(images);
      }

      //! МУЛЬТЕР

      res.status(201).json(newRestaurant);
    } else {
      return res.status(404);
    }
  } catch (error) {
    console.log("Error:", error);
    res.sendStatus(400);
  }
});

lkRouter.post("/getmyrest/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const preferense = await Preference.findAll({ where: { userId: id } });
    const countryIds = preferense.map((preference) => preference.countryId);

    const restaurants = await Restaurant.findAll({
      where: {
        countryId: {
          [Op.in]: countryIds,
        },
      },
    });
    res.json(restaurants);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

lkRouter.delete("/delmyrest/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const rest = await Restaurant.findByPk(id);
    rest.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

lkRouter.get("/mycomments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allmyrest = await Restaurant.findAll({
      where: { restOwnerId: id },
      include: [
        {
          model: Comment,
          include: User,
        },
      ],
    });

    res.send(allmyrest);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = lkRouter;
