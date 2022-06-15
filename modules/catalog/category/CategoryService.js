const Category = require("./CategorySchema");
const {slug}  = require("../../../helper/AppHelper");
/**
 * save user input data
 * **/
const createCategory = async (input) => {
  const response = new Category(input);
  // generate salt to hash password
    response.slug = slug(input.category_name);
  await response.save();
  return response;
};

const getCategory = async () => {
  return Category.find().populate("parent_category");
};

module.exports = { createCategory, getCategory };
