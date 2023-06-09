const getAvailableRestaurants = require("../AvailableRestaurants/getAvailableRestaurants");

module.exports = getAvailableRestaurantsSorting = async (pincode, sorting) => {
  try {
    const response = await getAvailableRestaurants(pincode);
    if (sorting == "low") {
      response.sort((a, b) => {
        const costA = parseInt(a.last.cost);
        const costB = parseInt(b.last.cost);
        return costA - costB;
      });
    } else if (sorting == "high") {
      response.sort((a, b) => {
        const costA = parseInt(a.last.cost);
        const costB = parseInt(b.last.cost);
        return costB - costA;
      });
    } else if (sorting == "rating") {
      response.sort((a, b) => {
        const costA = parseInt(a.last.star);
        const costB = parseInt(b.last.star);
        return costB - costA;
      });
    } else if (sorting == "time") {
      response.sort((a, b) => {
        const nameA = a.last.time.toLowerCase();
        const nameB = b.last.time.toLowerCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      });
    } else if (sorting == "relevance") {
      response.sort((a, b) => {
        const nameA = a.about.name.toLowerCase();
        const nameB = b.about.name.toLowerCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      });
    }
    return response;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
