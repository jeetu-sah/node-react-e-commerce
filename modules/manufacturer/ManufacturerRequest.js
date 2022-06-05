const { Validator } = require("node-input-validator");

const createValidation = (request) => {
  const v = new Validator(request, {
    name: "",
    name: "required",
    slug: "required",
    sort_order: "required|integer",
    keyword: "required",
  });
  return v;
};


module.exports = { createValidation };
