const express = require("express");
const {
  claimLetterController,
  deleteClaimLetterController,
  claimLetterSingleController,
  claimLetterControllerByEmail,
} = require("./claimLetter.controller");

const router = express.Router();

// all claim letter data store in mongodb
router.post("/", claimLetterController);

// delet claim letter data by user
router.delete("/delete/:id", deleteClaimLetterController);

// get single claim letter data using id
router.get("/single/:id", claimLetterSingleController);

// get all claim letter by email
router.get("/:email", claimLetterControllerByEmail);

module.exports = router;
