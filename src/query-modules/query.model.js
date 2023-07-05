const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
  howDoYouKnowUs: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  suggestions: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Query", querySchema);
