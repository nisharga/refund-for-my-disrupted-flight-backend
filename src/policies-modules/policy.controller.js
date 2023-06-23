const { policyService } = require("./policy.service");

const policyController = async (req, res, next) => {
  const { AirlinesName } = req.body;
  const policies = await policyService(AirlinesName);
  console.log("controller: ",policies);
  res.status(200).json({
    status: "success",
    data: policies,
  });
};

module.exports = {
  policyController,
};
