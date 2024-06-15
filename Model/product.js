const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: false,
    minlength: 3,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  type: {
    type: String,
    enum: ["running", "soccer", "futsal", "daily"],
    required: true,
  },
  size: {
    type: Number,
    default: 30,
    min: 30,
    max: 45,
  },
  quantity: {
    type: Number,
    default: 30,
    min: 1,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  newCollection: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
