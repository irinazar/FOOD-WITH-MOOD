const countryRouter = require('express').Router();
const { Category } = require('../db/models');

countryRouter.route('/')
  .get(async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

module.exports = countryRouter;
