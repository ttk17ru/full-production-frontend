import express from "express";
import http from "http";
import fs from "fs";
import { Server } from "socket.io";

// const express = require("express");
const userRouter = express.Router();
// const http = require("http");
// const fs = require("fs");
// const { Server } = require("socket.io");
const server = http.createServer(userRouter);
const io = new Server(server);

