const yup = require("./seetings");

const schemaCreateReview = yup.object().shape({
  name: yup.string().required(),
  rate: yup.number().required().positive().integer().max(10),
  description: yup.string(),
  user_date: yup.date().required(),
  image: yup.string()
});

module.exports = {
  schemaCreateReview
}