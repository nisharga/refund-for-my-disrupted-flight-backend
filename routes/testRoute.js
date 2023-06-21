const express = require("express");

const router = express.Router();

router.route("/test").get((req, res) => {
  res.send("Our Route is ON");
});

module.exports = router;
