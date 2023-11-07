const bcrypt = require("bcrypt");
const lkRouter = require("express").Router();
const {
  Image,
  Country,
  RestOwner,
  User,
  Comment,
  Restaurant,
  Preference,
  Favourite,
  CommentReply,
  Booking,
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
      include: {
        model: Restaurant,
        include: Image,
      },
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
      if (req.files) {
        const images = [];

        for (const file of req.files) {
          const name = `${Date.now()}.webp`;
          const outputBuffer = await sharp(file.buffer).webp().toBuffer();
          await fs.writeFile(`./public/img/restaurants/${name}`, outputBuffer);

          images.push({ image: name, restaurantId: newRestaurantId });
        }

        await Image.bulkCreate(images);
      }

      const newRestaurantWithImages = await Restaurant.findByPk(
        newRestaurantId,
        {
          include: Image,
        }
      );

      //! МУЛЬТЕР

      res.status(201).json(newRestaurantWithImages);
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
      include: [
        {
          model: Image,
        },
        {
          model: Favourite,
        },
      ],
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
    });
    const restaurantIds = allmyrest.map((restaurant) => restaurant.id);

    if (restaurantIds.length === 0) {
      res.send([]);
      return;
    }

    const allComments = await Comment.findAll({
      where: {
        restaurantId: restaurantIds,
      },
      include: [
        {
          model: User,
        },
        {
          model: CommentReply,
        },
        {
          model: Restaurant,
        },
      ],
    });

    res.send(allComments);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

lkRouter.post("/replycomment", async (req, res) => {
  try {
    const { commentId, body, restOwnerId } = req.body;
    const newCommentReply = await CommentReply.create({
      commentId: commentId,
      body: body,
      restOwnerId: restOwnerId,
    });

    if (newCommentReply) {
      res.status(201).json(newCommentReply);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

lkRouter.post("/favorite", async (req, res) => {
  console.log(req.body);
  try {
    const { userId, restaurantId } = req.body;

    const [favorite, created] = await Favourite.findOrCreate({
      where: {
        restaurantId,
        userId,
      },
    });

    if (!created) {
      await favorite.destroy();

      // console.log(rest, "oldddddddd");
      res.status(200).json({ del: true, rest: { id: restaurantId } });
      return;
    } else {
      const rest = await Restaurant.findByPk(restaurantId, {
        include: [
          {
            model: Favourite,
          },
          {
            model: Image,
          },
        ],
      });

      // console.log(rest, "newwwwwwwww");

      res.status(200).json({ rest });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

lkRouter.get("/myfav/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const myFavoriteRestaurants = await Restaurant.findAll({
      include: [
        {
          model: Favourite,
          where: {
            userId: id,
          },
        },
        {
          model: Image,
        },
      ],
    });

    res.status(200).json(myFavoriteRestaurants);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});


lkRouter.get("/:id/booking", async (req, res) => {
  const ownerId = req.params.id;

  try {
    const restaurants = await Restaurant.findAll({
      where: { restOwnerId: ownerId },
    });

    if (restaurants.length === 0) {
      return res.status(404).json({ error: "Рестораны не найдены" });
    }

    const restaurantIds = restaurants.map((restaurant) => restaurant.id);

    const bookings = await Booking.findAll({
      where: { restaurantId: restaurantIds },
      include: [
        {
          model: Restaurant,
          attributes: ["title"],
        },
      ],
    });
    res.status(200).json({ bookings });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

lkRouter.delete("/:id/booking", async (req, res) => {
  const bookingId = req.params.id;

  try {
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    await booking.destroy();

    res.status(204).json({ message: "Booking deleted" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = lkRouter;
