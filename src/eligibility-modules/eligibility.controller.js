const {
  eligibilityService,
  eligibilityServiceByEmail,
  deleteEligibilityService,
  eligibilitySingleData,
} = require("./eligibility.service");

const eligibilityController = async (req, res, next) => {
  const eligibility = await eligibilityService(req.body);

  res.status(200).json({
    status: "success",
    data: eligibility,
  });
};

const eligibilityControllerByEmail = async (req, res, next) => {
  const { email } = req.params;
  const eligibilityByEmail = await eligibilityServiceByEmail(email);
  res.status(200).json({
    status: "success",
    data: eligibilityByEmail,
  });
};

const deleteEligibilityController = async (req, res, next) => {
  const { id } = req.params;
  const DeleteByEmail = await deleteEligibilityService(id);
  res.status(200).json({
    status: "success",
    data: DeleteByEmail,
  });
};

const eligibilitySingleController = async (req, res, next) => {
  const { id } = req.params;
  const eligibilitySingle = await eligibilitySingleData(id);
  res.status(200).json({
    status: "success",
    data: eligibilitySingle,
  });
};

module.exports = {
  eligibilityController,
  eligibilityControllerByEmail,
  deleteEligibilityController,
  eligibilitySingleController,
};
