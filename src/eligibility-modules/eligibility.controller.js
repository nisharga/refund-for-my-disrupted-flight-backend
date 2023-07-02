const { eligibilityService } = require("./eligibility.service");

const eligibilityController = async (req, res, next) => {
  const eligibility = await eligibilityService(req.body);

  res.status(200).json({
    status: "success",
    data: eligibility,
  });
};

module.exports = {
  eligibilityController,
};
