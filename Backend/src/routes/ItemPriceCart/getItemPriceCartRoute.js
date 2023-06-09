const getItemPriceCart = require("../../db/ItemPriceCart/getItemPriceCart");

module.exports = getItemPriceCartRoute = {
  path: "/ItemPriceCart/:RestaurantId/:itemId",
  method: "get",
  handler: async (req, res) => {
    try {
      const RestaurantId = req.params.RestaurantId;
      const itemId = req.params.itemId;
      const response = await getItemPriceCart(RestaurantId, itemId);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json({});
    }
  },
};
