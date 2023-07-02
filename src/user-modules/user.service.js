const UserModel = require("./user.model");

async function createUser(name, email, photoUrl) {
  const user = new UserModel({
    name,
    email,
    photoUrl,
  });

  return user.save();
}

async function getUserByEmail(email) {
  return UserModel.findOne({ email });
}
async function updateUser(id, data) {
  return UserModel.findByIdAndUpdate(id, data, { new: true });
}

module.exports = {
  createUser,
  getUserByEmail,
  updateUser,
};
