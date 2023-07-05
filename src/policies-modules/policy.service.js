const { Configuration, OpenAIApi } = require("openai");
const Tracker = require("./policy.model");
const { openAiApiKey } = require("../../config");

const configuration = new Configuration({
  apiKey: openAiApiKey,
});

const openai = new OpenAIApi(configuration);

const policyService = async (payload) => {
  // console.log(payload);
  try {
    let data = await Tracker.findOne({
      AirlinesName: payload,
    });
    if (data) {
      const airData = {
        AirlinesPolicies: data.AirlinesPolicies,
      };
      return airData;
    } else {
      const generatedAnswer = await generateAnswer(payload);
      // Save the generated answer to MongoDB
      const newData = new Tracker({
        AirlinesName: payload,
        AirlinesPolicies: generatedAnswer,
      });
      data = await newData.save(); // Update 'data' with the saved document
      const airData = {
        AirlinesPolicies: data.AirlinesPolicies,
      };
      return airData;
    }
  } catch (error) {
    throw new Error(`Error getting policy: ${error}`);
  }
};

async function generateAnswer(airlineName) {
  const promt = `you work as an airline assistant, providing valuable support and assistance to airline passengers in need.
  I am looking for ${airlineName} airline's official policies and regulations.
  Please provide me with the official policies and regulations of ${airlineName} Airlines. This includes refund based but is not limited to information regarding baggage allowance, check-in procedures, ticketing policies, onboard services, flight disruptions, refunds, and any other relevant guidelines for passengers.
  Include also flight delay, flght cancel, over booking policies.
  and put them in order number 1 to 10.
 `;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${promt}`,
    temperature: 1,
    max_tokens: 1500,
  });
  return response.data.choices[0].text;
}

module.exports = {
  policyService,
};
