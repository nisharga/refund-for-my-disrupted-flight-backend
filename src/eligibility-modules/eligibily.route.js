const express = require("express");
const {
  eligibilityController,
  eligibilityControllerByEmail,
  deleteEligibilityController,
  eligibilitySingleController,
} = require("./eligibility.controller");

const router = express.Router();

// all eligible data store in mongodb
router.post("/", eligibilityController);

// delet eligible data by user
router.delete("/delete/:id", deleteEligibilityController);

// get single eligibilty data using id
router.get("/single/:id", eligibilitySingleController);

// get all eligibleCheck by email
router.get("/:email", eligibilityControllerByEmail);

module.exports = router;
