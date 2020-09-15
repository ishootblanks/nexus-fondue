const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var fetch = require("node-fetch");

//Import routes

const meatRoute = require("./routes/meats");
const ordersRoute = require("./routes/orders");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/meats", meatRoute);
app.use("/orders", ordersRoute);

//Fetch and store data

//Routes
app.get("/", (req, res) => {
  res.send("Home is working");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => {
    console.log("connected to db");
  }
);

//How do we start listening to the server
app.listen(3000);
