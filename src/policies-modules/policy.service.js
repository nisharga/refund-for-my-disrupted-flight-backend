const { Configuration, OpenAIApi } = require("openai");
const Tracker = require("./policy.model");
const { openAiApiKey } = require("../../config");

const configuration = new Configuration({
  apiKey: openAiApiKey,
});

const openai = new OpenAIApi(configuration);

const policyService = async (payload) => {
  try {
    const data = await Tracker.findOne({
      AirlinesName: payload
    });
    if (data ) {
      const airData = {
        AirlinesPolicies: data?.AirlinesPolicies
      };
      // console.log(airData);
      return airData;
    } else {
      const generatedAnswer = await generateAnswer(payload);
      // Save the generated answer to MongoDB
      const newData = new Tracker({
        AirlinesName: payload,
        AirlinesPolicies: generatedAnswer,
      });
      await newData.save();
      const airData = {
        AirlinesPolicies: data?.AirlinesPolicies
      };
      return airData;
    }
  } catch (error) {
    throw new Error(`Error to get policy ${error}`);
  }
};

async function generateAnswer(airlineName) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${airlineName}`,
    temperature: 1,
    max_tokens: 400,
  });
  return response.data.choices[0].text;
}

module.exports = {
  policyService,
};

// const generatedAnswer = await generateAnswer(payload);

// const newTracker = new Tracker({
//   // AirlinesName,
//   AirlinesName: payload,
//   AirlinesPolicies: generatedAnswer,
// });
// await newTracker.save();

// return generatedAnswer;
