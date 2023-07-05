const {
  claimLetterService,
  claimLetterServiceByEmail,
  deleteClaimLetterService,
  ClaimLetterSingleData,
} = require("./claimLetter.service");

const claimLetterController = async (req, res, next) => {
  const claimLetter = await claimLetterService(req.body);

  res.status(200).json({
    status: "success",
    data: claimLetter,
  });
};

const claimLetterControllerByEmail = async (req, res, next) => {
  const { email } = req.params;
  const ClaimLetterByEmail = await claimLetterServiceByEmail(email);
  res.status(200).json({
    status: "success",
    data: ClaimLetterByEmail,
  });
};

const deleteClaimLetterController = async (req, res, next) => {
  const { id } = req.params;
  const DeleteByEmail = await deleteClaimLetterService(id);
  res.status(200).json({
    status: "success",
    data: DeleteByEmail,
  });
};

const claimLetterSingleController = async (req, res, next) => {
  const { id } = req.params;
  const claimLetterSingle = await ClaimLetterSingleData(id);
  res.status(200).json({
    status: "success",
    data: claimLetterSingle,
  });
};

module.exports = {
  claimLetterController,
  claimLetterControllerByEmail,
  deleteClaimLetterController,
  claimLetterSingleController,
};
