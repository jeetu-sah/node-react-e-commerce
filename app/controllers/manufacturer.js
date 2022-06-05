
const { body, checkSchema, validationResult } = require("express-validator");
const User = require("../../modules/users/Users");
const { createMan , getManufacturer } = require("../../modules/manufacturer/ManufacturerService");
const { createValidation} = require("../../modules/manufacturer/ManufacturerRequest");

var jwt = require("jsonwebtoken");
var config = require("../../config/config"); // get db config file
const bcrypt = require("bcrypt");
const { Validator } = require('node-input-validator');




const create = async (req, res, next) =>{
    //return res.send(req.body);
    try{
      const v = createValidation(req.body);
      const matched = await v.check();
      if (!matched) {
        res.status(422).send(v.errors);
      }

      const createManufacturer = await createMan(req.body);

      if (createManufacturer) {
        return res.json({
          status: 200,
          msg: "Manufacturer create successfully",
          response: createManufacturer,
        });
      } else {
        return res.json({
          status: 100,
          msg: "Something went wrong, please try again.",
        });
      }
    }
    catch(err){
       return res.json({
         status: 500,
         msg: err.message,
       });
    }
}

const index = (req, res) => {
  try {
    return res.send("All manufacturer list available");

    // const createManufacturer = await getManufacturer();
  } catch (error) {
    return res.json({
      status: 500,
      msg: err.message,
    });
  }
};

module.exports = {
  create,
  index,
};