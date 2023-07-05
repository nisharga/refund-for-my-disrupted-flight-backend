const express = require("express");
const { QueryController } = require("./query.controller");

const router = express.Router();

router.post("/", QueryController);

module.exports = router;
