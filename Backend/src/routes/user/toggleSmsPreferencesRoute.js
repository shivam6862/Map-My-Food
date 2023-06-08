const toggleSmsPreferences = require("../../db/user/toggleSmsPreferences");

module.exports = toggleSmsPreferencesRoute = {
  path: "/smsPreferences/:id",
  method: "post",
  handler: async (req, res) => {
    const id = req.params.id;
    const response = await toggleSmsPreferences(id);
    return res.status(200).send({
      message: "Toggle Sms Preferences successfully!",
      response: response,
    });
  },
};
