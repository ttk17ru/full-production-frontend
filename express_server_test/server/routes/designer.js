import express from "express";

const designerRouter = express.Router();


designerRouter.get("/designs", (req, res) => {
  res.render("designs_dir");
})

designerRouter.get("/designs/buttons", (req, res) => {
  res.render("buttons_review");
})


export default designerRouter;