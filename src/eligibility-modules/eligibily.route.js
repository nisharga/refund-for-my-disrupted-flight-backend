const express = require("express");
const { eligibilityController } = require("./eligibility.controller");

const router = express.Router();

router.post("/", eligibilityController);

module.exports = router;
