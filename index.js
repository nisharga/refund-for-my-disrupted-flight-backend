const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { port } = require("./config");
const { connectToDatabase } = require("./server/connectToDatabase");
const app = express();

const testRoute = require("./routes/testRoute.js");

//default middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//mongoDB connect with mongoose
connectToDatabase();

//Routes
app.use("/api/v1/", testRoute);

app.get("/", (req, res) => {
  res.send(`Refund for my disrupted flight, my port is ${port}`);
});


app.listen(port, () => {
  console.log(`port listen, ${port}`);
});

module.exports = app;
