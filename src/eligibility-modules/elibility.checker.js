const { Configuration, OpenAIApi } = require("openai");
const { openAiApiKey } = require("../../config");

const configuration = new Configuration({
  apiKey: openAiApiKey,
});

const openai = new OpenAIApi(configuration);

async function generateAnswer(data) {
  const promt = `As an airline refund specialist, I determine eligibility for compensation or refunds based on ${data.airlineName} airline policies, regulations, and user-provided claim information. 
  Here are the user details. Airline: ${data.airlineName}, Flight Number: ${data.flightNumber}, Date of Disruption: ${data.dateOfDisruption}, Reason for Disruption: ${data.reasonForDisruption}, Boarding Pass Number: ${data.boardingPassNumber}, Boarding Pass Date: ${data.boardingPassDate}, Email Communication Summary: ${data.emailCommunicationSummary}, Message Exchange Summary: ${data.messageExchangeSummary}. 
  Now Analyze the above flight details and evidence for determine the eligibility.
  If eligible then provide some guideline with this provided information step by step.
  If user is not eligible then mention 5 reasons with bullet points so that the user can easily understand. 
  Replay like this Eligibility: TRUE/FALSE`;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${promt}`,
    max_tokens: 1500,
    temperature: 1,
  });
  return response.data.choices[0].text;
}
module.exports = {
  generateAnswer,
};
