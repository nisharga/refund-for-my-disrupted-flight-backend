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

const eligibilityServiceByEmail = async (email) => {
  try {
    const data = await EligibleCheck.find({ email });
    return data;
  } catch (error) {
    throw new Error(`Error to get check eligibility
   ${error}`);
  }
};

const deleteEligibilityService = async (id) => {
  try {
    const deletedData = await EligibleCheck.findByIdAndDelete(id);
    return `${deletedData.boardingPassNumber} Delete Sucessfully`;
    // Check if the data was found and deleted
    if (!deletedData) {
      return "Data not found.";
    }
  } catch (error) {
    throw new Error(`Error to Delete eligibility
   ${error}`);
  }
};

const eligibilitySingleData = async (id) => {
  try {
    const data = await EligibleCheck.findById(id);
    return data;
  } catch (error) {
    throw new Error(`Error to get single eligibility by id
   ${error}`);
  }
};

module.exports = {
  eligibilityService,
  eligibilityServiceByEmail,
  deleteEligibilityService,
  eligibilitySingleData,
};
