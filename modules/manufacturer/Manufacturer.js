const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manufacturerSchema = mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    sort_order: {
        type: Number, 
        required: true 
    },
    keyword: { 
        type: String, 
        required: true
    },
  },
  {
    timestamps: true,
  }
);

const Manufacturer = mongoose.model("manufacturers", manufacturerSchema);
module.exports = Manufacturer;
