const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// const aiResponseHandler = require("./RouteHandler/aiResponseHandler");

const port = process.env.PORT || 5000;
require("dotenv").config();

//default middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/ai/response", async (req, res) => {
  try {
    const { message } = req.body;
    console.log(message);
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `${message}`,
      temperature: 0.5,
      max_tokens: 656,
      // top_p: 1,
      // frequency_penalty: 0,
      // presence_penalty: 0,
    });
    return res.status(200).json({
      success: true,
      data: response.data.choices[0].text
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error
    })
  }
})


// app.use('/',aiResponseHandler);

app.get("/", (req, res) => {
  res.send("Refund for my disrupted flight");
});

app.listen(port, () => {
  console.log(`port listen, ${port}`);
});
