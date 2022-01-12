const knex = require("../connection");

const getReviews = async (req, res) => {
  try {
    const reviews = await knex("reviews");
    return res.status(200).json({ content: reviews });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createReview = async (req, res) => {
  try {
    const { name, rate, description, user_date } = req.body;

    //fazer conferencia se existe tudo isso

    const review = await knex("reviews")
      .insert({
        name,
        rate,
        description,
        user_date,
      })
      .returning("*");
    if (!review) {
      return res.status(500).json({ message: "Review não cadastrada" });
    }
    return res.status(201).json({ content: review });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getReviews,
  createReview,
};
