const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;
require("dotenv").config();

//default middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("I Love Express");
});

app.listen(port, () => {
  console.log(`port listen, ${port}`);
});
