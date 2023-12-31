const mongoose = require("mongoose");

const eligibleCheckerSchema = mongoose.Schema({
  eligibility: {
    type: Boolean,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  airlineName: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
  },
  dateOfDisruption: {
    type: String,
    required: true,
  },
  reasonForDisruption: {
    type: String,
    required: true,
  },
  boardingPassNumber: {
    type: String,
    required: true,
  },
  boardingPassDate: {
    type: String,
    required: true,
  },
  emailCommunicationSummary: {
    type: String,
    required: true,
  },
  messageExchangeSummary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("EligibleCheck", eligibleCheckerSchema);
