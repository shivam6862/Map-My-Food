const deleteRestaurantFood = require("../../db/RestaurantFood/deleteRestaurantFood");

module.exports = deleteRestaurantFoodRoute = {
  path: "/restaurantfood",
  method: "delete",
  handler: async (req, res) => {
    const { itemId } = req.body;
    const response = await deleteRestaurantFood(itemId);
    res.status(200).json({
      response: response,
      message: "Restaurant offers deleted Successfully!",
    });
  },
};
