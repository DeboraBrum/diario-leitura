const knex = require("../connection");
const { schemaCreateReview } = require("../schema/schemaReviews");

const getReviews = async (req, res) => {
  try {
    const reviews = await knex("reviews");
    res.status(200).json({ content: reviews });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const createReview = async (req, res) => {
  try {
    const { name, rate, description, user_date } = req.body;
    await schemaCreateReview.validate(req.body);
    const review = await knex("reviews")
      .insert({
        name,
        rate,
        description,
        user_date,
      })
      .returning("*");
    if (!review) {
      return res.status(500).json("Review não cadastrada");
    }
    res.status(201).json({ content: review });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const findReview = await knex("reviews").where({ id }).first();
    if (!findReview) {
      return res.status(404).json("Review não encontrada");
    };

    const deletedReview = await knex("reviews").where({ id }).del();
    if (!deletedReview) {
      return res.status(500).json("Review não excluída");
    };

    res.status(204).json({ content: "Review excluída com sucesso" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getReviews,
  createReview,
  deleteReview
};
