const getUserRoute = require("../routes/user/getUserRoute");
const insertUserRoute = require("../routes/user/insertUserRoute");
const getPaymentOffersRoute = require("../routes/PaymentOffers/getPaymentOffersRoute");
const getSearchRoute = require("../routes/search/getSearchRoute");

module.exports = routes = [
  getUserRoute,
  insertUserRoute,
  getPaymentOffersRoute,
  getSearchRoute,
];
