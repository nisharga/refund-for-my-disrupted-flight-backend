const { Configuration, OpenAIApi } = require("openai");
const { openAiApiKey } = require("../../config");

const configuration = new Configuration({
  apiKey: openAiApiKey,
});

const openai = new OpenAIApi(configuration);

async function generateClaimLetter(data) {
  const promt = `Spouse you are eligibile for compensation or a refund based on any airline company. Your have this kind of data. Airline: ${data.airlineName} Airlines, Flight Number: ${data.flightNumber}, Date of Disruption: ${data.dateOfDisruption}, Reason for Disruption: ${data.reasonForDisruption}, Boarding Pass Number: ${data.boardingPassNumber}, Boarding Pass Date: ${data.boardingPassDate}. 
  And you have some Receipts Details, (Meal ${data.meal}, Accommodation ${data.accommodation}, Transportation ${data.transportation}, other: ${data.other}). Those values 0 ignore it. Otherwise add it. 
  Email Communication Summary: ${data.emailCommunicationSummary}.
  Message Exchange Summary: ${data.messageExchangeSummary}.
  airline or relevant authorities. 
  Please donot add any introduction or any other things. Just need beautiful claim letter.
  just at the end add 
  Sincerely,
  ${data.fullName}
  `;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${promt}`,
    max_tokens: 1500,
    temperature: 1,
  });
  return response.data.choices[0].text;
}
module.exports = {
  generateClaimLetter,
};
