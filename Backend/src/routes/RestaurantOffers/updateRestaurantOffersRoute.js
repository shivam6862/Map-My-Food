const updateRestaurantOffers = require("../../db/RestaurantOffers/updateRestaurantOffers");
const Uploads = require("../Uploads/Uploads");

module.exports = updateRestaurantOffersRoute = {
  path: "/restaurantoffer",
  method: "put",
  handler: async (req, res) => {
    try {
      const { offerId, data } = req.body;
      const offerArray = JSON.parse(data);
      const offer = offerArray[0];
      if (req.files != null) {
        const { file } = req.files;
        const image = await Uploads(file);
        offer.image = image;
      }
      const response = await updateRestaurantOffers(offerId, offer);
      res.status(200).json({
        response: response,
        message: "Restaurant offers updated Successfully!",
      });
    } catch (err) {
      res.status(400).json({
        response: "",
        message: "Restaurant offers update Failed!",
      });
    }
  },
};
