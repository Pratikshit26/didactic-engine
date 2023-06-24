const express = require("express");
const Model = require("../model/model");
const router = express.Router();

// Search all banks list with all details

router.get("/listAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search with ifsc code

router.get("/search/ifsc/:key", async (req, res) => {
  let data = await Model.find({
    $or: [{ ifsc: { $regex: req.params.key } }],
  });

  res.send(data);
});

// filter specific bank branches

router.get("/search/branch/:key", async (req, res) => {
  let data = await Model.find({
    $or: [{ branch: { $regex: req.params.key } }],
  });

  res.send(data);
});

module.exports = router;
