const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema(
  {
    category_name: {
      type: String,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
    layout_override: {
      type: String,
      required: true,
    },
    meta_tag_description: {
      type: String,
    },
    meta_tag_keyword: {
      type: String,
    },
    meta_tag_title: {
      type: String,
    },
    parent_category: {
      type: String,
    },
    sort_order: {
      type: String,
    },
    status: {
      type: Number,
    },
    top: {
      type: Number,
    },
    stores: {
      type: Number,
    },
    columns: {
      type: Number,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("categories", categorySchema);
module.exports = Category;
