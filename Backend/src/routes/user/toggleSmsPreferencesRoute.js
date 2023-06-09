const toggleSmsPreferences = require("../../db/user/toggleSmsPreferences");

module.exports = toggleSmsPreferencesRoute = {
  path: "/smsPreferences/:id",
  method: "post",
  handler: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await toggleSmsPreferences(id);
      return res.status(200).send({
        message: "Toggle SMS Preferences successfully!",
        response: response,
      });
    } catch (err) {
      return res.status(400).send({
        message: "Failed to Toggle SMS Preferences!",
        response: "",
      });
    }
  },
};
