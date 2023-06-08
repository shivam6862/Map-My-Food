const updateRestaurant = require("../../db/Restaurant/updateRestaurant");
const Uploads = require("../Uploads/Uploads");

module.exports = updateRestaurantRoute = {
  path: "/restaurant",
  method: "put",
  handler: async (req, res) => {
    const { RestaurantId, data } = req.body;
    const Restaurant = JSON.parse(data);
    if (req.files != null) {
      const { file } = req.files;
      const image = await Uploads(file);
      Restaurant.image = image;
    }
    const response = await updateRestaurant(RestaurantId, Restaurant);
    res.status(200).json({
      response: response,
      message: "Restaurant updated Successfully!",
    });
  },
};
