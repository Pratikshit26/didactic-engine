const express = require("express");
const Model = require("../model/model");
const router = express.Router();

router.get("/banklist", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/search_ifsc/:key", async (req, res) => {
  let data = await Model.find({
    $or: [{ ifsc: { $regex: req.params.key } }],
  });

  res.send(data);
});

router.get("/search_branch/:key", async (req, res) => {
  let data = await Model.find({
    $or: [{ branch: { $regex: req.params.key } }],
  });

  res.send(data);
});

module.exports = router;
