const userService = require("./user.service");

async function createUser(req, res) {
  const { name, email, photoUrl } = req.body;
  try {
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) {
      res.status(200).json({ message: "User already exists." });
    } else {
      await userService.createUser(name, email, photoUrl);
      res.status(201).json({ message: "User created successfully." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { name, phone, bio, photoUrl } = req.body;
  try {
    const updatedUser = await userService.updateUser(id, {
      name,
      phone,
      bio,
      photoUrl,
    });
    res
      .status(200)
      .json({ message: "User updated successfully.", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
}

async function getUserByEmailController(req, res) {
  const { email } = req.params;
  try {
    const User = await userService.getUserByEmail(email);
    res.status(200).json({ message: "User get successfully.", user: User });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
}

module.exports = {
  createUser,
  updateUser,
  getUserByEmailController,
};
