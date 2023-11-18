const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET request for /users");
});

router.post("/", (req, res) => {
  res.send("Post request for /users");
});

module.exports = router;
