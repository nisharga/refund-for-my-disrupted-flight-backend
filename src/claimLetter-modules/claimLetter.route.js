const express = require("express");
const { claimLetterController } = require("./claimLetter.controller");

const router = express.Router();

router.post("/", claimLetterController);

module.exports = router;
