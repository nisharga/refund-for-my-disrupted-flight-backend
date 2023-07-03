const { generateClaimLetter } = require("./claimLetter.generate");

const ClaimLetter = require("./claimLetter.model");

const claimLetterService = async (payload) => {
  try {
    const {
      email,
      fullName,
      airlineName,
      flightNumber,
      dateOfDisruption,
      reasonForDisruption,
      boardingPassNumber,
      boardingPassDate,
      emailCommunicationSummary,
      messageExchangeSummary,
      meal,
      accommodation,
      transportation,
      other,
    } = payload;

    // ai generate answer
    const claimLetter = await generateClaimLetter(payload);

    // Create a new instance of the ClaimLetter model
    const claimLetterData = new ClaimLetter({
      email,
      fullName,
      airlineName,
      flightNumber,
      dateOfDisruption,
      reasonForDisruption,
      boardingPassNumber,
      boardingPassDate,
      receipts: [
        {
          meal,
          accommodation,
          transportation,
          other,
        },
      ],
      emailCommunicationSummary,
      messageExchangeSummary,
      claimLetter,
    });

    //Save the data to MongoDB
    const savedData = await claimLetterData.save();
    return savedData;
  } catch (error) {
    throw new Error(`Error to get check eligibility
     ${error}`);
  }
};

module.exports = {
  claimLetterService,
};
