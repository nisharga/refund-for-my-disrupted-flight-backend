const mongoose = require("mongoose");

const claimReasonSchema = mongoose.Schema({
    airlineName: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true
    },
    dateOfDisruption: {
        type: String,
        required: true
    },
    reasonForDisruption: {
        type: String,
        required: true
    },
    boardingPassNumber: {
        type: String,
        required: true
    },
    boardingPassDate: {
        type: String,
        required: true
    },
    emailSummary: {
        type: String,
        required: true
    },
    messageSummary: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("ClaimReason", claimReasonSchema);;