const { Configuration, OpenAIApi } = require("openai");
const { openAiApiKey } = require("../config/index");
const configuration = new Configuration({
    apiKey: openAiApiKey,
});

const openai = new OpenAIApi(configuration);

const getResponse = async (req, res) => {
    res.send("Response router is working");
}

const postResponse = async (req, res) => {

    try {
        const { message } = req.body;
        console.log(message);
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `${message}`,
            temperature: 1,
            max_tokens: 256,
            // top_p: 1,
            // frequency_penalty: 0,
            // presence_penalty: 0,
        });
        return res.status(200).json({
            success: true,
            data: response.data.choices[0].text
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: error
        })
    }

}

module.exports = { getResponse, postResponse }