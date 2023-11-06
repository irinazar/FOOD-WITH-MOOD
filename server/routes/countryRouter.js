const {Country} = require('../db/models');

const countryRouter = require('express').Router();


countryRouter.route('/')
  .get(async (req, res) => {
    try {
      const categories = await Country.findAll();
      res.json(categories);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = countryRouter;
