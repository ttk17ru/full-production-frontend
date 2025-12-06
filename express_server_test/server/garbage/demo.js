import express from "express";
import http from "http";
import fs from "fs";

const fullpro = express.Router();


fullpro.get("/fullpro", (req, res) => {
  const data = [
    { name: 'Ivan', hp: 100 },
    { name: 'Shiko', hp: 60 },
    { name: 'Nagy', hp: 10 }
  ];
  res.render("fullpropage", { data });
})

fullpro.get("/fullpro/design", (req, res) => {
  res.render("design", { data });
})

export default fullpro;