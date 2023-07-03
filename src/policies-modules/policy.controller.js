const { policyService } = require("./policy.service");

const policyController = async (req, res, next) => {
  const { airlineName } = req.body;

  const policies = await policyService(airlineName);

  res.status(200).json({
    status: "success",
    data: policies,
  });
};

module.exports = {
  policyController,
};
