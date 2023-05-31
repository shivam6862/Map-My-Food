const insertRestaurant = require("../../db/Restaurant/insertRestaurant");
const v4 = require("uuid").v4;

module.exports = insertRestaurantRoute = {
  path: "/restaurant",
  method: "post",
  handler: async (req, res) => {
    const {
      address,
      Restaurant,
      Restaurant_dish,
      location,
      FreeDeliveryonOrderDistance,
      FreeDeliveryonOrderAbove,
      rating,
      ratingCount,
      time,
      phone_number,
      opening_hours,
      price,
    } = req.body;
    const RestaurantId = v4();
    const response = await insertRestaurant(
      address,
      Restaurant,
      RestaurantId,
      Restaurant_dish,
      location,
      FreeDeliveryonOrderDistance,
      FreeDeliveryonOrderAbove,
      rating,
      ratingCount,
      time,
      phone_number,
      opening_hours,
      price
    );
    res.status(200).json(response);
  },
};
