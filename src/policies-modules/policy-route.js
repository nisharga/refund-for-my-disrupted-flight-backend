const express = require("express");
const { policyController } = require("./policy.controller");

const router = express.Router();

router.post("/policy", policyController);

module.exports = router;
