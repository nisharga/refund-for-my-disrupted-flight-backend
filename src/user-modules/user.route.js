const express = require("express");
const {
  createUser,
  updateUser,
  getUserByEmailController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUser);
router.get("/data/:email", getUserByEmailController);
router.put("/:id", updateUser);

module.exports = router;
