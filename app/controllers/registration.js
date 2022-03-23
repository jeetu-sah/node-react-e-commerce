const { body, checkSchema, validationResult } = require("express-validator");
const User = require("../../modules/users/Users");
const { addUser } = require("../../modules/users/service/userServices");
var jwt = require("jsonwebtoken");
var config = require('../../config/config'); // get db config file
const bcrypt = require("bcrypt");



const newRegistration = async (req, res, next) => {
  //try {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
     let mobileUserExist = await User.findOne({ mobile: req.body.mobile });
     if (!mobileUserExist) {
        const user = await addUser(req.body);

        if (user) {
          // if user is found and password is right create a token
          var token = jwt.sign({ data: user }, config.secret, {
            expiresIn: 604800, // 1 week
          });
          return res.json({ status: 200, token: "JWT " + token, user: user });
        }
     }else{
        return res.json({
          status: 100,
          msg: "This Mobile number is already exists !!!",
        });
     }
  } else {
    return res.json({ status: 100, msg: "This Email is already exists !!!" });
  }
};

const signin = async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  if(user){
    if ( await (bcrypt.compareSync(req.body.password, user.password)) ) {
      
       var token = jwt.sign({ data: user }, config.secret, {
         expiresIn: 604800, // 1 week
       });
       return res.json({
         status: 200,
         jwt_token: "JWT " + token,
         token: token,
         user: user,
       });
    } else {
      return res.json({ status: 100, msg: "Password does not matched !!!" });
    }
  }else{
      return res.json({ status: 100, msg: "User does not exists in our database!!!" });
  }
};

//export controller functions
module.exports = {
  signin,
  newRegistration,
  //deleteAllTea,
  //getOneTea,
  //newComment,
  //deleteOneTea,
};
