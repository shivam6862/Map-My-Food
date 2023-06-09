const getAvailableRestaurantsSorting = require("../../db/AvailableRestaurantsSorting/getAvailableRestaurantsSorting");

module.exports = getAvailableRestaurantsSortingRoute = {
  path: "/availablerestaurants/:pincode/:sorting",
  method: "get",
  handler: async (req, res) => {
    try {
      const pincode = req.params.pincode;
      const sorting = req.params.sorting;
      const response = await getAvailableRestaurantsSorting(pincode, sorting);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json([]);
    }
  },
};
