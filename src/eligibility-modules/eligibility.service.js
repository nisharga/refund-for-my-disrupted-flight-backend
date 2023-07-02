const { generateAnswer } = require("./elibility.checker");

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
    const result = generateAnswer(payload);
    return result;
  } catch (error) {
    throw new Error(`Error to get check eligibility
     ${error}`);
  }
};

module.exports = {
  eligibilityService,
};
