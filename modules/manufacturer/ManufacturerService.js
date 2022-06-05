const Manufacturer = require("./Manufacturer");


/**
 * save user input data
 * **/
const createMan = async (input) => {
  const response = new Manufacturer(input);
  // generate salt to hash password
  await response.save();
  return response;
};

const getManufacturer = async () => {

  return  "All manufacturer send successfully";
};

module.exports = { createMan, getManufacturer };
