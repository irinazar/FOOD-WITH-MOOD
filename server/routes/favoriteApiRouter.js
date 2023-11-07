const { Favourite } = require("../db/models");
const favoriteRouter = require("express").Router();

favoriteRouter.post('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.session?.user?.id;
      const existingFavorite = await Favourite.findOne({
        where: {
            userId,
            restaurantId: id,
        },
      });
  
      if (existingFavorite) {
        return res.status(400).json({ message: "Запись уже существует в избранном" });
      }
      await Favourite.create({
        userId,
        restaurantId: id,
        status:true
      });
      
  
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Произошла ошибка при добавлении в избранное" });
    }
  });
  
  favoriteRouter.delete('/:id', async (req, res) => {
    try {
     await Favourite.destroy({ where: {
        restaurantId: req.params.id,
        userId: req.session?.user?.id } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }})

module.exports =  favoriteRouter;