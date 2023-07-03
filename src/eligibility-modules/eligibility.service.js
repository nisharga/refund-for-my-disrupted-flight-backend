const { generateAnswer } = require("./elibility.checker");
const EligibleCheck = require("./eligibility.model");

const eligibilityService = async (payload) => {
  try {
    const {
      email,
      airlineName,
      flightNumber,
      dateOfDisruption,
      reasonForDisruption,
      boardingPassNumber,
      boardingPassDate,
      emailCommunicationSummary,
      messageExchangeSummary,
    } = payload;
    // ai generate answer
    const result = await generateAnswer(payload);
    //get boolean value true/false base on eligibility
    const eligibility = await result.includes("Eligibility: TRUE");

    // Create a new instance of the EligibleChecker model
    const eligibleChecker = new EligibleCheck({
      email,
      airlineName,
      flightNumber,
      dateOfDisruption,
      reasonForDisruption,
      boardingPassNumber,
      boardingPassDate,
      emailCommunicationSummary,
      messageExchangeSummary,
      eligibility,
      answer: result,
    });

    // Save the data to MongoDB
    const savedData = await eligibleChecker.save();
    return savedData;
  } catch (error) {
    throw new Error(`Error to get check eligibility
     ${error}`);
  }
};

module.exports = {
  eligibilityService,
};
