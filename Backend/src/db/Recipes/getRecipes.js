const getDb = require("../db").getDb;
const getRestaurant = require("../Restaurant/getRestaurant");

module.exports = getRecipes = async () => {
  const connection = await getDb();
  const response = await connection
    .collection("restaurantFood")
    .find()
    .toArray();
  const RecipiesData = [];
  await Promise.all(
    response.map(async (restaurant, index) => {
      const Restaurant = await getRestaurant(restaurant.RestaurantId);
      const opening_hours =
        "OPENS NEXT AT " + Restaurant.opening_hours + " TODAY";
      const newObj = {};
      newObj[opening_hours] = {};
      await restaurant.food.map((item, indexj) => {
        if (indexj >= 3) return;
        newObj[opening_hours][`data_${indexj}`] = {
          image: item.image,
          restaurant: Restaurant.Restaurant,
          name: item.name,
        };
      });
      RecipiesData.push(newObj);
    })
  );
  RecipiesData.sort((a, b) => {
    const timeA = Object.keys(a)[0].split(" ")[3];
    const timeB = Object.keys(b)[0].split(" ")[3];
    return new Date(`1970/01/01 ${timeA}`) - new Date(`1970/01/01 ${timeB}`);
  });
  return RecipiesData;
};
