const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  _id: String,
  ifsc: String,
  bank_id: Number,
  branch: String,
  address: String,
  city: String,
  district: String,
  state: String,
  bank_name: String,
});

module.exports = mongoose.model("bank_branches", dataSchema);
