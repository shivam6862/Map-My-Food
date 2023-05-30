const getAvailableRestaurants = require("../../db/AvailableRestaurants/getAvailableRestaurants");

module.exports = getAvailableRestaurantsRoute = {
  path: "/availablerestaurants",
  method: "get",
  handler: async (req, res) => {
    const response = await getAvailableRestaurants();
    res.status(200).json(response);
  },
};
