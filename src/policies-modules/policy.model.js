const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  AirlinesName: {
    type: String,
    required: true,
  },
  AirlinesPolicies: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tracker", trackerSchema);
