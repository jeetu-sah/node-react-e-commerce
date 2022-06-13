const { Validator } = require("node-input-validator");

const createValidation = (request) => {
  const v = new Validator(request, {
    category_name: "",
    category_name: "required",
    sort_order: "required|integer",
    keyword: "required",
    columns: "required",
    meta_tag_description: "required",
    meta_tag_keyword: "required",
    meta_tag_title: "required",
    sort_order: "required",
    status: "required",
    stores: "required",
    top: "required",
    layout_override: "required",
  });
  return v;
};

module.exports = { createValidation };
