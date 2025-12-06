import express from "express";

const reviewRouter = express.Router();

reviewRouter.get("/designs", (req, res) => {
  res.redirect("/designs/button");
})

reviewRouter.get("/designs/button", (req, res) => {
  res.render("button_designs");
})

export default reviewRouter;