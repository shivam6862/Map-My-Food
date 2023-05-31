const getRecipes = require("../../db/Recipes/getRecipes");

module.exports = getRecipesRoute = {
  path: "/recipes/:pincode",
  method: "get",
  handler: async (req, res) => {
    const pincode = req.params.pincode;
    const response = await getRecipes(pincode);
    res.status(200).json(response);
  },
};
