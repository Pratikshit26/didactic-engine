require("dotenv").config();
const Model = require("./model/model");

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");

const app = express();

app.use(express.json());

app.use("/", routes);
mongoose.connect(mongoString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
  database.once("connected", (error, result) => {
    console.log("Database Connected");
  });
});
