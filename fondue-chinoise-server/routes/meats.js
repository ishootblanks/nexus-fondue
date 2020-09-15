const express = require("express");
const router = express.Router();

const Meat = require("../models/meatMenu");

//GET ALL MEATS

router.get("/", async (req, res) => {
  try {
    const meats = await Meat.find();
    res.json(meats);
  } catch (err) {
    res.json(err);
  }
});

//SUBMIT A MEAT

router.post("/", async (req, res) => {
  const meat = new Meat({
    value: req.body.value,
    text: req.body.text,
    description: req.body.description,
    priceKg: req.body.priceKg,
    orderPrice: req.body.orderPrice,
    pictureUrl: req.body.pictureUrl,
  });
  try {
    const savedMeats = await meat.save();
    res.json(savedMeats);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIC MEAT

router.get("/:meatId", async (req, res) => {
  try {
    const meat = await Meat.findById(req.params.meatId);
    res.json(meat);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE SPECIFIC MEAT

router.delete("/:_id", async (req, res) => {
  try {
    const removedMeat = await Meat.deleteOne({ _id: req.params._id });
    res.json(removedMeat);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE A MEAT

router.patch("/:_id", async (req, res) => {
  try {
    const updatedMeat = await Meat.updateOne(
      { _id: req.params._id },
      {
        $set: {
          value: req.body.value,
          text: req.body.text,
          description: req.body.description,
          priceKg: req.body.priceKg,
          pictureUrl: req.body.pictureUrl,
        },
      }
    );
    res.json(updatedMeat);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
