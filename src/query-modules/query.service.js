const queryModel = require("./query.model");

async function createQuery(
  howDoYouKnowUs,
  category,
  rating,
  email,
  feedback,
  suggestions
) {
  const query = new queryModel({
    howDoYouKnowUs,
    category,
    rating,
    email,
    feedback,
    suggestions,
  });

  return query.save();
}

module.exports = {
  createQuery,
};
