const { body, checkSchema, validationResult } = require("express-validator");
const { Validator } = require("node-input-validator");
const {
  createValidation,
} = require("../../modules/catalog/category/CategoryRequest");
const {
  createCategory,
  getCategory,
} = require("../../modules/catalog/category/CategoryService");

const create = async (req, res, next) => {
  try {
    const v = createValidation(req.body);
    const matched = await v.check();
    if (!matched) {
      res.status(422).send(v.errors);
    }
    const saveCategoryResponse = await createCategory(req.body);
    if (saveCategoryResponse) {
      return res.json({
        status: 200,
        msg: "Category create successfully",
        response: saveCategoryResponse,
      });
    } else {
      return res.json({
        status: 100,
        msg: "Something went wrong, please try again.",
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      msg: error.message,
    });
  }
};

const list = async (req, res, next) => {
  try{
      const categoryList = await getCategory();
      return res.json({
        status: 200,
        msg: "All Category List successfully",
        response: categoryList,
      });
  }catch(error){
     return res.json({
       status: 500,
       msg: error.message,
     });
  }

};

//export controller functions
module.exports = {
  create,
  list,
  //deleteAllTea,
  //getOneTea,
  //newComment,
  //deleteOneTea,
};
