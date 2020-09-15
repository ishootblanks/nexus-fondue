const mongoose = require("mongoose");

const MeatSchema = mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priceKg: {
    type: Number,
    required: true,
  },
  orderPrice: {
    type: Number,
    default: null,
  },
  amount: {
    type: Number,
    default: null,
  },
  pictureUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Meats", MeatSchema);
