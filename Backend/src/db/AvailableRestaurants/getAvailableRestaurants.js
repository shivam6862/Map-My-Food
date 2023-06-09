const getDb = require("../db").getDb;
const getRestaurant = require("../Restaurant/getRestaurant");

module.exports = getAvailableRestaurants = async (pincode) => {
  try {
    const connection = await getDb();
    const response = await connection
      .collection("restaurantFood")
      .find()
      .toArray();
    var AvailableRestaurants = [];
    await Promise.all(
      response.map(async (restaurant, index) => {
        const Restaurant = await getRestaurant(restaurant.RestaurantId);
        if (Restaurant.pincode == pincode) {
          await restaurant.food.map((item, indexj) => {
            var temp = {
              itemId: "",
              image: "",
              about: { heading: "", name: "" },
              last: { star: "", time: "", cost: "" },
            };
            temp.about.heading = Restaurant.Restaurant;
            temp.itemId = item.itemId;
            temp.image = item.image;
            temp.about.name = item.name;
            temp.last.star = item.star;
            temp.last.time = item.timeRequired;
            temp.last.cost = item.price;
            AvailableRestaurants.push(temp);
          });
        }
      })
    );
    return AvailableRestaurants;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
