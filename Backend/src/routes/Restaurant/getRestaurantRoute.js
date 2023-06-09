const getRestaurant = require("../../db/Restaurant/getRestaurant");

module.exports = getRestaurantRoute = {
  path: "/restaurant/:id",
  method: "get",
  handler: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await getRestaurant(id);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json({});
    }
  },
};
