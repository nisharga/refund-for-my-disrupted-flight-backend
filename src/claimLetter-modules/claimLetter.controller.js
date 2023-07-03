const { claimLetterService } = require("./claimLetter.service");

const claimLetterController = async (req, res, next) => {
  const claimLetter = await claimLetterService(req.body);

  res.status(200).json({
    status: "success",
    data: claimLetter,
  });
};

module.exports = {
  claimLetterController,
};
