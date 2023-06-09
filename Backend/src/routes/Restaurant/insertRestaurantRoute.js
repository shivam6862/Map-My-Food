const insertRestaurant = require("../../db/Restaurant/insertRestaurant");
const v4 = require("uuid").v4;
const Uploads = require("../Uploads/Uploads");

module.exports = insertRestaurantRoute = {
  path: "/restaurant",
  method: "post",
  handler: async (req, res) => {
    try {
      const { userId, data } = req.body;
      const Restaurant = JSON.parse(data);
      const RestaurantId = v4();
      Restaurant.RestaurantId = RestaurantId;
      if (req.files != null) {
        const { file } = req.files;
        const image = await Uploads(file);
        Restaurant.image = image;
      }
      const response = await insertRestaurant(userId, Restaurant);
      res
        .status(200)
        .json({ response: response, message: "Restaurant is created!" });
    } catch (err) {
      res
        .status(400)
        .json({ response: {}, message: "Restaurant create Failed!" });
    }
  },
};
