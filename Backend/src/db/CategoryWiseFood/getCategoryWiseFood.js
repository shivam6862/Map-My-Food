const getDb = require("../db").getDb;
const getRestaurant = require("../Restaurant/getRestaurant");

module.exports = getCategoryWiseFood = async (pincode) => {
  try {
    const connection = await getDb();
    const response = await connection
      .collection("restaurantFood")
      .find()
      .toArray();
    const categorizedFood = [];
    for (const restaurant of response) {
      const Restaurant = await getRestaurant(restaurant.RestaurantId);
      if (Restaurant.pincode == pincode) {
        for (const foodItem of restaurant.food) {
          const category = foodItem.category;
          const existingCategory = categorizedFood.find((item) =>
            item.hasOwnProperty(category)
          );
          if (existingCategory) {
            existingCategory[category].push({
              ...foodItem,
              Restaurant: Restaurant.Restaurant,
              RestaurantId: Restaurant.RestaurantId,
              opening_hours: Restaurant.opening_hours,
            });
          } else {
            const newCategory = {
              [category]: [
                {
                  ...foodItem,
                  Restaurant: Restaurant.Restaurant,
                  RestaurantId: Restaurant.RestaurantId,
                  opening_hours: Restaurant.opening_hours,
                },
              ],
            };
            categorizedFood.push(newCategory);
          }
        }
      }
    }
    return categorizedFood;
  } catch (err) {
    console.log(err.messsage);
    throw err;
  }
};
