const express = require("express");
const { Restaurant } = require("../db/models");

const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
  try {
    const pendingRestaurants = await Restaurant.findAll({
      where: { status: 'Pending' },
      include: [ 
        { model: Picture, attributes: ['img'] },
      ],
    })

    if (pendingRestaurants) {

      res.json(pendingRestaurants);
    } else {
      res.status(404).json({ error: "pending restaurants not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

adminRouter.patch('/accept', async (req, res) => {
  const restaurantId = req.body.restaurantId; 
  try {
    const updatedRestaurant = await Restaurant.update(
      { status: 'Accepted' },
      {
        where: { id: restaurantId },
      }
    );

    if (updatedRestaurant[0] === 1) {
      res.status(200).json(updatedRestaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

adminRouter.patch('/decline', async (req, res) => {
  const restaurantId = req.body.restaurantId; 
  try {
    const updatedRestaurant = await Restaurant.update(
      { status: 'Declined' },
      {
        where: { id: restaurantId },
      }
    );

    if (updatedRestaurant[0] === 1) {
      res.status(200).json(updatedRestaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = adminRouter