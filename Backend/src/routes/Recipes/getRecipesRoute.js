const getRecipes = require("../../db/Recipes/getRecipes");

module.exports = getRecipesRoute = {
  path: "/recipes/:pincode",
  method: "get",
  handler: async (req, res) => {
    try {
      const pincode = req.params.pincode;
      const response = await getRecipes(pincode);
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json([]);
    }
  },
};
