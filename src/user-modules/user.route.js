const express = require("express");
const { createUser, updateUser } = require("./user.controller");

const router = express.Router();

router.post("/", createUser);
router.put("/:id", updateUser);

module.exports = router;
