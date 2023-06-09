const getDb = require("../db").getDb;
const getRestaurant = require("../Restaurant/getRestaurant");

module.exports = getItemPriceCart = async (RestaurantId, itemId) => {
  try {
    const connection = await getDb();
    const response = await connection
      .collection("restaurantFood")
      .findOne({ RestaurantId: RestaurantId });
    const matchingFoodItem = response.food.find(
      (item) => item.itemId === itemId
    );
    const Restaurant = await getRestaurant(RestaurantId);
    const newObj = {};
    if (matchingFoodItem == null) {
      newObj[itemId] = {
        hotal: "Data not Found",
        name: "",
        price: "",
        image: "",
      };
      return newObj;
    }
    newObj[itemId] = {
      hotal: Restaurant.Restaurant,
      name: matchingFoodItem.name,
      price: matchingFoodItem.price,
      image: matchingFoodItem.image,
    };
    return newObj;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
