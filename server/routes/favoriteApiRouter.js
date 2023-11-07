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
        // Удаляем запись из таблицы Favourite
        await existingFavorite.destroy();
        return res.sendStatus(200);
      }
      
      // Создаем новую запись в таблице Favourite
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








module.exports =  favoriteRouter;