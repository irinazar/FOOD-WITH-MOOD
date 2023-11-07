const { Country, Restaurant, Image, Favourite, Rating } = require("../db/models");

const countryRouter = require("express").Router();

countryRouter.route("/").get(async (req, res) => {
  try {
    const categories = await Country.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

countryRouter.route("/:id").get(async (req, res) => {
  try {
    const category = await Country.findByPk(req.params.id, {
      include: [
        {
          model: Restaurant,
          include: [Image, Favourite,Rating],
        },
      ],
    });
    console.log(category.Rating);
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = countryRouter;
