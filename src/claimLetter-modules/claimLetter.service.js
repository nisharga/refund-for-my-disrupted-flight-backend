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

const claimLetterServiceByEmail = async (email) => {
  try {
    const data = await ClaimLetter.find({ email });
    return data;
  } catch (error) {
    throw new Error(`Error to get check claimLetterServiceByEmail
   ${error}`);
  }
};

const deleteClaimLetterService = async (id) => {
  try {
    const deletedData = await ClaimLetter.findByIdAndDelete(id);
    return `${deletedData.boardingPassNumber} Delete Sucessfully`;
    // Check if the data was found and deleted
    if (!deletedData) {
      return "Data not found.";
    }
  } catch (error) {
    throw new Error(`Error to Delete deleteClaimLetterService
   ${error}`);
  }
};

const ClaimLetterSingleData = async (id) => {
  try {
    const data = await ClaimLetter.findById(id);
    return data;
  } catch (error) {
    throw new Error(`Error to get single eligibility by id
   ${error}`);
  }
};

module.exports = {
  claimLetterService,
  claimLetterServiceByEmail,
  deleteClaimLetterService,
  ClaimLetterSingleData,
};
