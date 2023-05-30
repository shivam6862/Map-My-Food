const getCategoryWiseFood = require("../../db/CategoryWiseFood/getCategoryWiseFood");

module.exports = getCategoryWiseFoodRoute = {
  path: "/categorywisefood/:id",
  method: "get",
  handler: async (req, res) => {
    const id = req.params.id;
    const response = await getCategoryWiseFood(id);
    res.status(200).json(response);
  },
};
