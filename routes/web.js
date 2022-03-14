const { checkSchema } = require("express-validator");

//Load Controller
const registration = require("../app/controllers/registration");


module.exports = function (app) {
  //   app.post("/registration", (req, res) => {
  //     res.send("Got a POST request");
  //   });

  app.post(
    "/registration",
    registration.newRegistration
  );

};
