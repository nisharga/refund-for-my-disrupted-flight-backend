const { createQuery } = require("./query.service");

async function QueryController(req, res) {
  const { howDoYouKnowUs, category, rating, email, feedback, suggestions } =
    req.body;
  try {
    await createQuery(
      howDoYouKnowUs,
      category,
      rating,
      email,
      feedback,
      suggestions
    );
    res.status(201).json({ message: "Query send successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
}

module.exports = {
  QueryController,
};
