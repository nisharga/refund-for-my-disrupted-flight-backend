const express = require("express");
const {
  eligibilityCheckController,
  claimLetterController,
  policiesController,
} = require("../controllers/aiGenerateController");
const router = express.Router();

router.post("/eligibility", eligibilityCheckController);
router.post("/claimletter", claimLetterController);
router.post("/policies", policiesController);

module.exports = router;
