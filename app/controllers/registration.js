const { body, checkSchema, validationResult } = require("express-validator");
const User = require("../../modules/users/Users");
const { addUser } = require("../../modules/users/service/userServices");
var jwt = require("jsonwebtoken");
var config = require('../../config/config'); // get db config file



const newRegistration = async (req, res, next) => {
  //try {
    const user = await addUser(req.body);
    if (user) {
      console.log(user)
     // if user is found and password is right create a token
      var token = jwt.sign({ data: user }, config.secret, {
                            expiresIn: 604800, // 1 week
                          });
      return res.json({ success: true, token: "JWT " + token, user: user });
    }
};

//export controller functions
module.exports = {
  //getAllTea,
  newRegistration,
  //deleteAllTea,
  //getOneTea,
  //newComment,
  //deleteOneTea,
};
