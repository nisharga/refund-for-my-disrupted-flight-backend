const {
  eligibilityCheckService,
  claimLetterService,
  policiesService,
} = require("../services/aiGenerateServerce");

const eligibilityCheckController = async (req, res) => {
  const eligibility = await eligibilityCheckService(req.body);
  res.status(200).json({
    status: "success",
    data: eligibility,
  });
};

const claimLetterController = async (req, res) => {
  const claim = await claimLetterService(req.body);
  res.status(200).json({
    status: "success",
    data: claim,
  });
};

module.exports = {
  eligibilityCheckController,
  claimLetterController,
};
