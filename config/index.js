// Import the dotenv module
require("dotenv").config();

// Define your configuration variables
const config = {
  mongoUri: process.env.MONGO_URI,
  openAiApiKey: process.env.OPENAI_API_KEY,
  port: process.env.PORT || 5000,
  // Add more variables as needed
};

// Export the configuration variables
module.exports = config;
