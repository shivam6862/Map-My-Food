const getDb = require("../db").getDb;
const getRestaurant = require("../Restaurant/getRestaurant");

module.exports = getCategoryWiseFood = async (id) => {
  const connection = await getDb();
  const response = await connection
    .collection("restaurantFood")
    .find({ RestaurantId: id })
    .toArray();
  const Restaurant = await getRestaurant(id);
  const foodByCategory = response[0].food.reduce((categories, item) => {
    const { category, ...rest } = item;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(rest);
    return categories;
  }, {});
  const combinedData = {
    RestaurantAddress: Restaurant,
    foodByCategory: foodByCategory,
  };
  return combinedData;
};
