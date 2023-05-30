const getRecipes = require("../../db/Recipes/getRecipes");

module.exports = getRecipesRoute = {
  path: "/recipes",
  method: "get",
  handler: async (req, res) => {
    const response = await getRecipes();
    res.status(200).json(response);
  },
};
