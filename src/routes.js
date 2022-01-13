const express = require("express");
const {
  getReviews,
  createReview,
  deleteReview,
} = require("./controllers/reviewBooks");

const route = express();

route.get("/", getReviews);
route.post("/reviews", createReview);
route.delete("/reviews/:id", deleteReview);


module.exports = route;
