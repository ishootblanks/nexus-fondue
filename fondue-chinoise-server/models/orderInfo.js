const mongoose = require("mongoose");

const OrderInfoSchema = mongoose.Schema({
  orderInfo: {
    type: Object,
    required: true,
  },
  orders: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("OrdersInfo", OrderInfoSchema);
