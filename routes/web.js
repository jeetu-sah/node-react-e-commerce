// const express = require("express");
// const router = express.Router();
const { checkSchema } = require("express-validator");
//Load Controller
const registration = require("../app/controllers/registration");
const manufacturer = require("../app/controllers/manufacturer");

//Load routes files.
//import { productCategory } from "../routes/productCategory.js";
const productcategory = require("../routes/productCategory.js");
const catalogRoutes = require("../routes/catalog.js");


module.exports = function (app) {
  //   app.post("/registration", (req, res) => {
    //     res.send("Got a POST request");
    //   });
  
  app.post("/api/registration", registration.newRegistration);
  app.post("/api/login", registration.signin);
  //manufacturer
  app.post("/api/manufacturer/create", manufacturer.create);
  app.get("/api/manufacturer/list", manufacturer.index);

  //Load routes files
  app.use("/api/product_category", productcategory);
  app.use("/api/catalog", catalogRoutes);
};
