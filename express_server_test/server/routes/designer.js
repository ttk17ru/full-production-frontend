import express from "express";

const designerRouter = express.Router();


designerRouter.get("/", (req, res) => {
  res.redirect("/serverdir");
})

designerRouter.get("/home", (req, res) => {
  res.render("home");
})

designerRouter.get("/buttons", (req, res) => {
  res.render("button");
})

designerRouter.get("/header", (req, res) => {
  res.render("header");
})


export default designerRouter;