const getCategoryWiseFood = require("../../db/CategoryWiseFood/getCategoryWiseFood");

module.exports = getCategoryWiseFoodRoute = {
  path: "/categorywisefood/:pincode",
  method: "get",
  handler: async (req, res) => {
    try {
      const pincode = req.params.pincode;
      const response = await getCategoryWiseFood(pincode);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json([]);
    }
  },
};
