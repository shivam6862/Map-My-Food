const express = require("express");
const routes = require("./routes");
const mongoConnect = require("./db/db").mongoConnect;
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.static(__dirname + "/images/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization,AuthToken"
  );
  next();
});

routes.forEach((route) => app[route.method](route.path, route.handler));

mongoConnect(() => {
  app.listen(8080, () => {
    console.log("Server is listening on Port 8080");
  });
});
