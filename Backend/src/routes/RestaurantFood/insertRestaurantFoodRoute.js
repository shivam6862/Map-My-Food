const insertRestaurantFood = require("../../db/RestaurantFood/insertRestaurantFood");
const v4 = require("uuid").v4;
const Uploads = require("../Uploads/Uploads");

module.exports = insertRestaurantFoodRoute = {
  path: "/restaurantfood",
  method: "post",
  handler: async (req, res) => {
    try {
      const { RestaurantId, data } = req.body;
      const food = JSON.parse(data);
      var image = "";
      if (req.files != null) {
        const { file } = req.files;
        image = await Uploads(file);
      }
      const foodWithId = food.map((food, index) => ({
        itemId: v4(),
        image: image,
        ...food,
      }));
      const response = await insertRestaurantFood(RestaurantId, foodWithId);
      res
        .status(200)
        .json({ response: response, message: "Food item Saved Successfully!" });
    } catch (err) {
      res.status(400).json({ response: "", message: "Food item Save Failed!" });
    }
  },
};
