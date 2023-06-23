const express = require("express");
const { getResponse, postResponse } = require("../controllers/apiController");
const router = express.Router();

router.route("/test").get((req, res) => {
  res.send("Our Route is ON");
});
router.route("/response").get(getResponse);
router.route("/response").post(postResponse);

module.exports = router;
