const getDb = require("../db").getDb;
const getRestaurant = require("../Restaurant/getRestaurant");

module.exports = getRecipes = async (pincode) => {
  try {
    const connection = await getDb();
    const response = await connection
      .collection("restaurantFood")
      .find()
      .toArray();
    const RecipiesData = [];
    await Promise.all(
      response.map(async (restaurant, index) => {
        const Restaurant = await getRestaurant(restaurant.RestaurantId);
        if (Restaurant.pincode == pincode) {
          const opening_hours =
            "OPENS NEXT AT " + Restaurant.opening_hours + " TODAY";
          const newObj = {};
          newObj[opening_hours] = {};
          const number = Math.floor(Math.random() * 4 + 1);
          await restaurant.food.map((item, indexj) => {
            if (indexj >= number) return;
            newObj[opening_hours][`data_${indexj}`] = {
              image: item.image,
              restaurant: Restaurant.Restaurant,
              name: item.name,
            };
          });
          RecipiesData.push(newObj);
        }
      })
    );
    RecipiesData.sort((a, b) => {
      const timeA = Object.keys(a)[0].split(" ")[3];
      const timeB = Object.keys(b)[0].split(" ")[3];
      return new Date(`1970/01/01 ${timeA}`) - new Date(`1970/01/01 ${timeB}`);
    });
    return RecipiesData;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
