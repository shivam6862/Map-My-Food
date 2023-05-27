const getUser = require("../../db/user/getUser");

module.exports = getUserRoute = {
  path: "/user/:id",
  method: "get",
  handler: async (req, res) => {
    const id = req.params.id;
    const response = await getUser(id);
    res.status(200).json(response);
  },
};
