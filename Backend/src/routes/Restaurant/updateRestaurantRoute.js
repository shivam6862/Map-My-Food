const updateRestaurant = require("../../db/Restaurant/updateRestaurant");

module.exports = updateRestaurantRoute = {
  path: "/restaurant",
  method: "put",
  handler: async (req, res) => {
    const { RestaurantId, Restaurant } = req.body;
    const response = await updateRestaurant(RestaurantId, Restaurant);
    res.status(200).json({
      response: response,
      message: "Restaurant updated Successfully!",
    });
  },
};
