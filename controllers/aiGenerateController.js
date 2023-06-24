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

const policiesController = async (req, res, next) => {
  const { message } = req.body;
  const policies = await policiesService(message);
  res.status(200).json({
    status: "success",
    data: policies.data.choices[0].text,
  });
};

module.exports = {
  eligibilityCheckController,
  claimLetterController,
  policiesController,
};
