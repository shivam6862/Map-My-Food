const updateRestaurantFood = require("../../db/RestaurantFood/updateRestaurantFood");
const Uploads = require("../Uploads/Uploads");

module.exports = updateRestaurantFoodRoute = {
  path: "/restaurantfood",
  method: "put",
  handler: async (req, res) => {
    try {
      const { itemId, data } = req.body;
      const foodArray = JSON.parse(data);
      const food = foodArray[0];
      if (req.files != null) {
        const { file } = req.files;
        const image = await Uploads(file);
        food.image = image;
      }
      const response = await updateRestaurantFood(itemId, food);
      res.status(200).json({
        response: response,
        message: "Restaurant offers updated Successfully!",
      });
    } catch (err) {
      res.status(400).json({
        response: "",
        message: "Restaurant offers update Failed!",
      });
    }
  },
};
