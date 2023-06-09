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
const updateRestaurantOffersRoute = require("../routes/RestaurantOffers/updateRestaurantOffersRoute");
const deleteRestaurantOffersRoute = require("../routes/RestaurantOffers/deleteRestaurantOffersRoute");
const updateRestaurantFoodRoute = require("../routes/RestaurantFood/updateRestaurantFoodRoute");
const deleteRestaurantFoodRoute = require("../routes/RestaurantFood/deleteRestaurantFoodRoute");
const updateRestaurantRoute = require("../routes/Restaurant/updateRestaurantRoute");
const getRestaurantAllOffersRoute = require("../routes/RestaurantOffers/getRestaurantAllOffersRoute");
const getRestaurantAllFoodRoute = require("../routes/RestaurantFood/getRestaurantAllFoodRoute");
const toggleSmsPreferencesRoute = require("../routes/user/toggleSmsPreferencesRoute");
const insertUserAddressesRoute = require("../routes/user/insertUserAddressesRoute");
const getUserAddressesRoute = require("../routes/user/getUserAddressesRoute");
const deleteUserAddressesRoute = require("../routes/user/deleteUserAddressesRoute");
const insertUserOrderRoute = require("../routes/UserOrder/insertUserOrderRoute");
const getUserOrderRoute = require("../routes/UserOrder/getUserOrderRoute");
const updateProfileRoute = require("../routes/user/updateProfileRoute");

module.exports = routes = [
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
  updateRestaurantOffersRoute,
  deleteRestaurantOffersRoute,
  updateRestaurantFoodRoute,
  deleteRestaurantFoodRoute,
  updateRestaurantRoute,
  getRestaurantAllOffersRoute,
  getRestaurantAllFoodRoute,
  toggleSmsPreferencesRoute,
  insertUserAddressesRoute,
  getUserAddressesRoute,
  deleteUserAddressesRoute,
  insertUserOrderRoute,
  getUserOrderRoute,
  updateProfileRoute,
];
