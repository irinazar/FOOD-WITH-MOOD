const express = require("express");
const { Restaurant, Comment, Rating, sequelize } = require("../db/models");

const restaurantRouter = express.Router();

restaurantRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(+id)) {
    res.status(400).json({ message: "Id is not a number" });
    return;
  }
  try {
    const oneRestaurant = await Restaurant.findOne({
      where: { id },
      include: [ 
        { model: Rating, attributes: ['rating'] },
      ],
    });

    if (oneRestaurant) {
      const ratings = oneRestaurant.Ratings.map((rating) => rating.rating);
      const averageRating =
        ratings.reduce((total, rating) => total + rating, 0) / ratings.length;
      oneRestaurant.averageRating = averageRating;


      res.json(oneRestaurant);
    } else {
      res.status(404).json({ error: "restaurant not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

restaurantRouter.get("/:id/comments", async (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(+id)) {
    res.status(400).json({ message: "Id is not a number" });
    return;
  }
  try {
    const comments = await Comment.findAll({
      where: { restaurantId: id },
      include: [
        { model: User, attributes: ['name', 'avatar']}, 
      ],
    })
    if (comments) {
      res.json(comments);
    } else {
      res.status(404).json({ error: "comments not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = restaurantRouter;