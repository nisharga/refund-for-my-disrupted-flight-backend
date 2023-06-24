const { OpenAIApi, Configuration } = require("openai");
const { openAiApiKey } = require("../config");
const EligibleChecker = require('../model/eligibleCheckerSchema');
const ClaimReason = require('../model/claimReasonSchema');

const configuration = new Configuration({
  apiKey: openAiApiKey,
});

const openai = new OpenAIApi(configuration);

const eligibilityCheckService = async (payload) => {

  try {
    console.log(payload);
    const { airlineName, flightNumber, dateOfDisruption, reasonForDisruption, boardingPassNumber, boardingPassDate } = payload;
    const data = await EligibleChecker.findOne({
      $and: [
        { airlineName: airlineName },
        { flightNumber: flightNumber },
        { dateOfDisruption: dateOfDisruption },
        { reasonForDisruption: reasonForDisruption },
        { boardingPassNumber: boardingPassNumber },
        { boardingPassDate: boardingPassDate }
      ]
    })
    if (data) {
      return data.eligibility;
    }
    else {
      const message = `You are a flight claim assistant who can say eligibile or not eligilbe based on mentioned airline policies, regulations, and user-provided information for calim. AT first only reply eligibility like eligible or not eligible.'Airline Name: ${airlineName} Flight Number: ${flightNumber} Date of Disruption: ${dateOfDisruption} Reason for Disruption: ${reasonForDisruption} Boarding Pass Number: ${boardingPassNumber} Boarding Pass Date: ${boardingPassDate}'`;

      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${message}`,
        temperature: 1,
        max_tokens: 256,
      });
      const text = response.data.choices[0].text;
      const eligibility = text.replace(/\n\n/g, '');
      const responseData = {
        airlineName,
        flightNumber,
        dateOfDisruption,
        reasonForDisruption,
        boardingPassNumber,
        boardingPassDate,
        eligibility
      }
      const newData = new EligibleChecker(responseData);
      const data = await newData.save();
      return data.eligibility;
    }
  } catch (error) {
    throw new Error(`Error to get check eligibility
     ${error}`);
  }
};

const claimLetterService = async (payload) => {
  try {
    const { airlineName, flightNumber, dateOfDisruption, reasonForDisruption, boardingPassNumber, boardingPassDate, emailSummary, messageSummary } = payload;
    const data = await ClaimReason.findOne({
      $and: [
        { airlineName: airlineName },
        { flightNumber: flightNumber },
        { dateOfDisruption: dateOfDisruption },
        { reasonForDisruption: reasonForDisruption },
        { boardingPassNumber: boardingPassNumber },
        { boardingPassDate: boardingPassDate },
        { emailSummary: emailSummary },
        { messageSummary: messageSummary }
      ]
    })
    if (data) {
      return data.answer;
    }
    else {
      const message = `You are a flight claim assistant who can check eligibility of a passenger for compensation or refund based on user-provided information and mentioned airline policies, and regulations.'Airline Name: ${airlineName} Flight Number: ${flightNumber} Date of Disruption: ${dateOfDisruption} Reason for Disruption: ${reasonForDisruption} Boarding Pass Number: ${boardingPassNumber} Boarding Pass Date: ${boardingPassDate} Email Communication Summary:${emailSummary} Message Exchange Summary:${messageSummary}'Now provide a claim letter if above user information is for eligible passenger or provide five reasons one by one in order if above user information is for not eligible passenger.Only any one has to give claim letter or else five reasons`
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${message}`,
        temperature: 0.5,
        max_tokens: 600,
      });
      const text = response.data.choices[0].text;
      const responseData = {
        airlineName,
        flightNumber,
        dateOfDisruption,
        reasonForDisruption,
        boardingPassNumber,
        boardingPassDate,
        emailSummary,
        messageSummary,
        answer: text
      }
      const newData = new ClaimReason(responseData);
      const data = await newData.save();
      return data.answer;
    }
  } catch (error) {
    throw new Error(`Error to get Claim Letter ${error}`);
  }
};

const policiesService = async (payload) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `${payload}`,
      temperature: 1,
      max_tokens: 320,
    });
    ``;
    return response;
  } catch (error) {
    throw new Error(`Error to get airline policies ${error}`);
  }
};

module.exports = {
  eligibilityCheckService,
  claimLetterService,
  policiesService,
};
