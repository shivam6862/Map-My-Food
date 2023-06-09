const updateProfile = require("../../db/user/updateProfile");

module.exports = updateProfileRoute = {
  path: "/updateprofile/:id/:place/:newdata",
  method: "post",
  handler: async (req, res) => {
    try {
      const id = req.params.id;
      const place = req.params.place;
      const newdata = req.params.newdata;
      const response = await updateProfile(id, place, newdata);
      res.status(200).json({
        response: response,
        message: " updated Successfully!",
      });
    } catch (error) {
      res.status(400).json({
        response: "",
        message: " updated Failed!",
      });
    }
  },
};
