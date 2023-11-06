const express = require("express");
const { Restaurant, Image } = require("../db/models");

const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
  try {
    const pendingRestaurants = await Restaurant.findAll({
      where: { status: "Pending" },
      include: [{ model: Image, attributes: ["image"] }],
    });

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

adminRouter.patch("/accept/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRestaurant = await Restaurant.update(
      { status: "Accepted" },
      {
        where: { id },
      }
    );

    if (updatedRestaurant) {
      res.status(200).json(updatedRestaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

adminRouter.patch("/decline/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRestaurant = await Restaurant.update(
      { status: "Declined" },
      {
        where: { id },
      }
    );

    if (updatedRestaurant) {
      res.status(200).json(updatedRestaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = adminRouter;
