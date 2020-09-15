const express = require("express");
const router = express.Router();
const mailService = require("../services/mail.service");

const Order = require("../models/orderInfo");

//GET ALL ORDERS

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.json(err);
  }
});

//SUBMIT A ORDER
const createBodyText = (body) => {
  let text = "";
  text += "Hello\n\n";
  text += "orders:\n";
  for (const order of body.orders) {
    text += `${order.text} ${order.amount}g \n`;
  }
  text += " \n\n";
  text += `${body.orderInfo.name} \n`;
  text += `${body.orderInfo.address}`;

  return text;
};

router.post("/", async (req, res) => {
  const order = new Order({
    orderInfo: req.body.orderInfo,
    orders: req.body.orders,
  });
  try {
    const savedOrders = await order.save();
    await mailService.send({
      to: "blanks.ratkovic@gmail.com",
      subject: "New order has arrived",
      text: createBodyText(req.body),
    });
    res.json(savedOrders);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
