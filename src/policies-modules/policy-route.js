const express = require("express");
const { policyController } = require("./policy.controller");

const router = express.Router();

router.post("/", policyController);

module.exports = router;
