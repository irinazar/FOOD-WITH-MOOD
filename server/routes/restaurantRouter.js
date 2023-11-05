const express = require("express");
const { Restaurant, Comment, Rating, sequelize, User, Booking, Image } = require("../db/models");

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

    const comments = await Comment.findAll({
      where: { restaurantId: id },
      include: [
        { model: User, attributes: ['name', 'avatar']}, 
      ],
    })
    const pictures = await Image.findAll({
      where: { restaurantId: id },
    })

    if (oneRestaurant, comments, pictures) {
      const ratings = oneRestaurant.Ratings.map((rating) => rating.rating);
      const averageRating =
        ratings.reduce((total, rating) => total + rating, 0) / ratings.length;
      oneRestaurant.averageRating = averageRating;

      res.json({oneRestaurant, comments});
    } else {
      res.status(404).json({ error: "restaurant not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

restaurantRouter.post("/:id/addComment", async(req, res) => {
  const { id } = req.params;
  const {body} = req.body
  console.log(req.body);
  if (Number.isNaN(+id)) {
    res.status(400).json({ message: "Id is not a number" });
    return;
  }
  if (!body) {
    res.status(400).json({ message: "Input should be filled in" });
    return;
  }
  try {
    const newComment = await Comment.create({
      userId: req.session.userId,
      restaurantId: id,
      body
    });
    res.json(newComment)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

restaurantRouter.post('/:id/booking', async(req, res) => {
  const {bookerName, bookerPhone, date} = req.body
  if (!(bookerName && bookerPhone && date))  return res.sendStatus(400);
  const [booking, created] = await Booking.findOrCreate({
    where: {userId:req.session.id, restaurantId:req.params.id, date},
    defaults: {
      bookerName,
      bookerPhone,
    },
  })
  if (!created) return res.sendStatus(403);
  return res.json(booking);
})

module.exports = restaurantRouter;