// Expressライブラリを読み込む
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end(JSON.stringify({ message: " hello" }));
});

module.exports = router;
