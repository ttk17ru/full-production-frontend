import express from "express";
import http from "http";
import fs from "fs";
import { Server } from "socket.io";
import userRouter, { setIO, setupSocketHandlers } from "./routes/users.js";
// import darkRouter from "./routes/darkweb.js";
// import fullpro from "./routes/demo.js";
// import reviewRouter from "./routes/reviewer.js";
import designerRouter from "./routes/designer.js";
import dirRouter from "./routes/server_dir.js";
import path from "path";
// import { fileURLToPath } from "url";


// const __filename = fileURLToPath(import.meta.url);
// const express = require("express");
// const path = require("path");
const app = express();
const __dirname = path.resolve();
// const http = require("http");
// const fs = require("fs");
// const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const PORT = 9999;


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRouter);
// app.use("/", darkRouter);
// app.use("/", fullpro);
// app.use("/", reviewRouter);
app.use("/designs", designerRouter);
app.use("/serverdir", dirRouter);

setIO(io);
setupSocketHandlers();

app.get("/", (req, res) => {
  // to render page file from the views folder
  res.redirect("/index")
})

app.get("/index", (req, res) => {
  res.render("index")
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
