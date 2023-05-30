const getCategoryWiseFood = require("../../db/CategoryWiseFood/getCategoryWiseFood");

module.exports = getCategoryWiseFoodRoute = {
  path: "/categorywisefood",
  method: "get",
  handler: async (req, res) => {
    const response = await getCategoryWiseFood();
    res.status(200).json(response);
  },
};
