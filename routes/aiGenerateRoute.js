const express = require("express");
const {
  eligibilityCheckController,
  claimLetterController,
} = require("../controllers/aiGenerateController");
const router = express.Router();

router.post("/eligibility", eligibilityCheckController);
router.post("/claimletter", claimLetterController);

module.exports = router;
