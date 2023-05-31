const getAvailableRestaurants = require("../../db/AvailableRestaurants/getAvailableRestaurants");

module.exports = getAvailableRestaurantsRoute = {
  path: "/availablerestaurants/:pincode",
  method: "get",
  handler: async (req, res) => {
    const pincode = req.params.pincode;
    const response = await getAvailableRestaurants(pincode);
    res.status(200).json(response);
  },
};
