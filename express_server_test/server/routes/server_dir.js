import express from "express";

const dirRouter = express.Router();


dirRouter.get("/", (req, res) => {
  const data = [
    { n: 1, dm: '/designs/home', btntext: 'Home Design' },
    { n: 2, dm: '/designs/buttons', btntext: 'Button Design' },
    { n: 3, dm: '/designs/header', btntext: 'Header Design' },

    { n: 4, dm: '/users/login', btntext: 'Users Login Page (NOT FOR THE PRODUCTION PROJECT)' },
  ];

  res.render("serverdir", { data });
})

export default dirRouter;