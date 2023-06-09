const getAvailableRestaurants = require("../../db/AvailableRestaurants/getAvailableRestaurants");

module.exports = getAvailableRestaurantsRoute = {
  path: "/availablerestaurants/:pincode",
  method: "get",
  handler: async (req, res) => {
    try {
      const pincode = req.params.pincode;
      const response = await getAvailableRestaurants(pincode);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json([]);
    }
  },
};
