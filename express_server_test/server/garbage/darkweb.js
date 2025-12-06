import express from "express";
import http from "http";
import fs from "fs";
// import { Server } from "socket.io";


// const express = require("express");
const darkRouter = express.Router();
// const http = require("http");
// const fs = require("fs");
// const { Server } = require("socket.io");
// const server = http.createServer(darkRouter);
// const io = new Server(server);
const LOGIN_FILE = "login_data.ttk";
const SIGNUP_FILE = "signup_data.ttk";
const DEVICE_DATA_FILE = "device_data.ttk"

let io; // will be set from main server

darkRouter.get("/darkweb", (req, res) => {
  // to render page file from the views folder
  // res.render("darkweb");
  res.render("flex");
})

darkRouter.get("/darkweb/downloadvid", (req, res) => {
  res.download("public/assets/red.mkv");
})

export default darkRouter;