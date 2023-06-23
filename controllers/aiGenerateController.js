const {
  eligibilityCheckService,
  claimLetterService,
  policiesService,
} = require("../services/aiGenerateServerce");

const eligibilityCheckController = async (req, res, next) => {
  const { message } = req.body;
  const eligibility = await eligibilityCheckService(message);
  res.status(200).json({
    status: "success",
    data: eligibility.data.choices[0].text,
  });
};

const claimLetterController = async (req, res, next) => {
  const { message } = req.body;
  const claim = await claimLetterService(message);
  res.status(200).json({
    status: "success",
    data: claim.data.choices[0].text,
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
