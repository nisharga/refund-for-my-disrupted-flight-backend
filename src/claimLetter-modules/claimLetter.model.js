const mongoose = require("mongoose");

const claimLetterSchema = mongoose.Schema({
  claimLetter: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fullName: {
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
  receipts: [
    {
      meal: {
        type: Number,
      },
      accommodation: {
        type: Number,
      },
      transportation: {
        type: Number,
      },
      other: {
        type: Number,
      },
    },
  ],
  emailCommunicationSummary: {
    type: String,
    required: true,
  },
  messageExchangeSummary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ClaimLetter", claimLetterSchema);
