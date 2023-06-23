const { OpenAIApi, Configuration } = require("openai");
const { openAiApiKey } = require("../config");

const configuration = new Configuration({
  apiKey: openAiApiKey,
});

const openai = new OpenAIApi(configuration);

const eligibilityCheckService = async (payload) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `${payload}`,
      temperature: 1,
      max_tokens: 256,
    });
    return response;
  } catch (error) {
    throw new Error(`Error to get check eligibility
     ${error}`);
  }
};

const claimLetterService = async (payload) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `${payload}`,
      temperature: 1,
      max_tokens: 400,
    });
    return response;
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
