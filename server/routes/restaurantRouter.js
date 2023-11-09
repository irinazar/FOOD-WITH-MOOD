const express = require("express");
const {
  Restaurant,
  Comment,
  Rating,
  sequelize,
  User,
  Booking,
  Image,
  CommentReply
} = require("../db/models");

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
      include: [{ model: Rating, attributes: ["rating"] }],
    });

    const allComments = await Comment.findAll({
      where: { restaurantId: id },
      include: [
        {
          model: User,
          attributes: ["name", "avatar"],
        },
        {
          model: CommentReply, 
          attributes: ["body"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    const comments = allComments.map((comment) => {
      return {
        id: comment.id,
        restaurantId: comment.restaurantId,
        body: comment.body,
        User: comment.User
          ? {
              userName: comment.User.name,
              avatar: comment.User.avatar,
            }
          : null,
        commentReply: comment.CommentReplies.map((reply) => reply.body)
      };
    });
    const pictures = await Image.findAll({
      where: { restaurantId: id },
    });

    const ratings = oneRestaurant.Ratings.map((rating) => rating.rating);
    const averageRating =
      ratings.reduce((total, rating) => total + rating, 0) / ratings.length;
      console.log(
        oneRestaurant, 'OLOOOOOOOOOOOOOOOOOOOOOOO', 
        comments , 'OLOOOOOOOOOOOOOOOOOOOOOOO', 
        pictures,'OLOOOOOOOOOOOOOOOOOOOOOOO', 
        averageRating, 'OLOOOOOOOOOOOOOOOOOOOOOOO');

    if ((oneRestaurant,  pictures)) {
      res.json({ oneRestaurant, comments, pictures, averageRating });
    } else {
      res.status(404).json({ error: "restaurant not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

restaurantRouter.post("/:id/addComment", async (req, res) => {
  const { id } = req.params;
  const { body, userId } = req.body;

  if (Number.isNaN(+id)) {
    res.status(400).json({ message: "Id is not a number" });
    return;
  }
  if (!body) {
    res.status(400).json({ message: "Input should be filled in" });
    return;
  }
  try {
    const createNewComment = await Comment.create({
      userId,
      restaurantId: id,
      body,
    });

    const newComment = await Comment.findOne({
      where: { userId, restaurantId: id },
      include: [
        {
          model: User,
          attributes: ["name", "avatar"],
        },
        {
          model: CommentReply, 
          attributes: ["body"],
        },
      ],
    });
    newComment.user = newComment.User
      ? {
          userName: newComment.User.name,
          avatar: newComment.User.avatar,
        }
      : null;
    
    newComment.commentReply = newComment.CommentReplies.map((reply) => reply.body);
    
console.log(newComment, 'NEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEWCOMMENT!!!!!!!!');
    res.json(newComment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

restaurantRouter.patch("/:id/addRating", async (req, res) => {
  const { id } = req.params;
  const { rating, userId } = req.body;


  if (Number.isNaN(+id) || !rating || rating < 0 || rating > 5) {
    res.status(400).json({ message: "Invalid rating value" });
    return;
  }

  try {
    const restaurant = await Restaurant.findByPk(id);
    if (!restaurant) {
      res.status(404).json({ error: "Restaurant not found" });
      return;
    }

    const [newRating, created] = await Rating.findOrCreate({
      where: {
        restaurantId: id,
        userId,
      },
      defaults: {
        rating,
      },
    });

    if (created) {
      res.json(newRating);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

restaurantRouter.post("/:id/booking", async (req, res) => {
  try {
    const { bookerName, bookerPhone, date, userId } = req.body;
    if (!(bookerName && bookerPhone && date && userId)) return res.sendStatus(400);
    
    const [booking, created] = await Booking.findOrCreate({
      where: { userId, restaurantId: req.params.id, date },

      defaults: {
        bookerName,
        bookerPhone,
      },
    });
    
    if (!created) return res.sendStatus(403);
    return res.json(booking);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

restaurantRouter.delete("/:id/comments/:commentId", async (req, res) => {
  const { id, commentId } = req.params;
console.log(id, commentId, 'AAAAAAAAAAAAAAAAAAAAAAAAAA');
  if (Number.isNaN(+id) || Number.isNaN(+commentId)) {
    res.status(400).json({ message: "Invalid IDs" });
    return;
  }

  try {
    const restaurant = await Restaurant.findByPk(id);
    if (!restaurant) {
      res.status(404).json({ error: "Restaurant not found" });
      return;
    }

    const deletedComment = await Comment.destroy({
      where: { id: commentId, restaurantId: id },
    });

    if (deletedComment) {
      res.json(deletedComment);
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = restaurantRouter;
