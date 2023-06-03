const getUserRoute = require("../routes/user/getUserRoute");
const insertUserRoute = require("../routes/user/insertUserRoute");
const getPaymentOffersRoute = require("../routes/PaymentOffers/getPaymentOffersRoute");
const getSearchRoute = require("../routes/search/getSearchRoute");
const getRestaurantRoute = require("../routes/Restaurant/getRestaurantRoute");
const insertRestaurantRoute = require("../routes/Restaurant/insertRestaurantRoute");
const insertRestaurantOffersRoute = require("../routes/RestaurantOffers/insertRestaurantOffersRoute");
const insertRestaurantFoodRoute = require("../routes/RestaurantFood/insertRestaurantFoodRoute");
const getRestaurantFoodRoute = require("../routes/RestaurantFood/getRestaurantFoodRoute");
const getCategoryWiseFoodRoute = require("../routes/CategoryWiseFood/getCategoryWiseFoodRoute");
const getAvailableRestaurantsRoute = require("../routes/AvailableRestaurants/getAvailableRestaurantsRoute");
const getRecipesRoute = require("../routes/Recipes/getRecipesRoute");
const getItemPriceCartRoute = require("../routes/ItemPriceCart/getItemPriceCartRoute");
const getAvailableRestaurantsSortingRoute = require("../routes/AvailableRestaurantsSorting/getAvailableRestaurantsSortingRoute");
const insertSignInRoute = require("../routes/Authentication/insertSignInRoute");
const insertVerifyRoute = require("../routes/Authentication/insertVerifyRoute");
const insertSignUpRoute = require("../routes/Authentication/insertSignUpRoute");

module.exports = routes = [
  getUserRoute,
  insertUserRoute,
  getPaymentOffersRoute,
  getSearchRoute,
  getRestaurantRoute,
  insertRestaurantRoute,
  insertRestaurantOffersRoute,
  insertRestaurantFoodRoute,
  getRestaurantFoodRoute,
  getCategoryWiseFoodRoute,
  getAvailableRestaurantsRoute,
  getRecipesRoute,
  getItemPriceCartRoute,
  getAvailableRestaurantsSortingRoute,
  insertSignInRoute,
  insertVerifyRoute,
  insertSignUpRoute,
];
