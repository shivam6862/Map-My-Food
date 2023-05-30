const insertRestaurantFood = require("../../db/RestaurantFood/insertRestaurantFood");
const v4 = require("uuid").v4;

module.exports = insertRestaurantFoodRoute = {
  path: "/restaurantfood",
  method: "post",
  handler: async (req, res) => {
    const { RestaurantId, food } = req.body;
    const foodWithId = food.map((food, index) => ({
      itemId: v4(),
      ...food,
    }));
    const response = await insertRestaurantFood(RestaurantId, foodWithId);
    res.status(200).json(response);
  },
};
