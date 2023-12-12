const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  colorway: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  collab: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Sneakers = mongoose.model("sneakers", sneakerSchema);
module.exports = Sneakers;
