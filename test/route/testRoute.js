const express = require("express");
const { getResponse, postResponse } = require("../controller/apiController");
const router = express.Router();

router.route("/test").get((req, res) => {
  res.send("Our Route is ON");
});
router.route("/testApi").get(getResponse);
router.route("/eligibile").post(postResponse);

module.exports = router;
