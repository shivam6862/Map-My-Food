const getCategoryWiseFood = require("../../db/CategoryWiseFood/getCategoryWiseFood");

module.exports = getCategoryWiseFoodRoute = {
  path: "/categorywisefood/:pincode",
  method: "get",
  handler: async (req, res) => {
    const pincode = req.params.pincode;
    const response = await getCategoryWiseFood(pincode);
    res.status(200).json(response);
  },
};
