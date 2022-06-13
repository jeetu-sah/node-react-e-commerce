const Category = require("./CategorySchema");

/**
 * save user input data
 * **/
const createCategory = async (input) => {
  const response = new Category(input);
  // generate salt to hash password
  await response.save();
  return response;
};

const getCategory = async () => {
  return Category.find();
};

module.exports = { createCategory, getCategory };
