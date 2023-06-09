const insertRestaurantOffers = require("../../db/RestaurantOffers/insertRestaurantOffers");
const v4 = require("uuid").v4;
const Uploads = require("../Uploads/Uploads");

module.exports = insertRestaurantOffersRoute = {
  path: "/restaurantoffer",
  method: "post",
  handler: async (req, res) => {
    try {
      const { RestaurantId, data } = req.body;
      const offers = JSON.parse(data);
      const image = "";
      if (req.files != null) {
        const { file } = req.files;
        image = await Uploads(file);
      }
      const offersWithId = offers.map((offer, index) => ({
        offerId: v4(),
        image: image,
        ...offer,
      }));
      const response = await insertRestaurantOffers(RestaurantId, offersWithId);
      res.status(200).json({
        response: response,
        message: "Restaurant offers Saved Successfully!",
      });
    } catch (err) {
      res.status(400).json({
        response: "",
        message: "Restaurant offers Save Failed!",
      });
    }
  },
};
