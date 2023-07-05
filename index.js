const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { port } = require("./config");
const { connectToDatabase } = require("./server/connectToDatabase");
const app = express();

const testRoute = require("./test/route/testRoute.js");
const aiGenerateRoute = require("./test/route/aiGenerateRoute.js");

const policyRoute = require("./src/policies-modules/policy-route");
const userRoute = require("./src/user-modules/user.route");
const queryRoute = require("./src/query-modules/query.route");

const eligibilityRoute = require("./src/eligibility-modules/eligibily.route");
const claimLetterRoute = require("./src/claimLetter-modules/claimLetter.route");

const {
  eligibilityCheckController,
} = require("./test/controller/aiGenerateController");

//default middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//mongoDB connect with mongoose
connectToDatabase();

//Main Routes
app.use("/api/v1/eligibility", eligibilityRoute);
app.use("/api/v1/letter", claimLetterRoute);
app.use("/api/v1/policy", policyRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/query", queryRoute);
//Main Routes

app.get("/", (req, res) => {
  res.send(`Refund for my disrupted flight, my port is ${port}`);
});

app.listen(port, () => {
  console.log(`port listen, ${port}`);
});

//Routes For Testing
app.use("/api/v1/", testRoute);
app.use("/api/v1/aigenerate", aiGenerateRoute);
//Routes For Testing

module.exports = app;
