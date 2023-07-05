const mongoose = require("mongoose");
const { mongoUri } = require("../config");

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process with an error
  }
}

module.exports = { connectToDatabase };
