const getSearch = require("../../db/search/getSearch");

module.exports = getSearchRoute = {
  path: "/smallsearch/:search",
  method: "get",
  handler: async (req, res) => {
    const search = req.params.search;
    if (search.trim().length == 0) {
      res.status(200).json([]);
      return;
    }
    const response = await getSearch(search);
    res.status(200).json(response);
  },
};
