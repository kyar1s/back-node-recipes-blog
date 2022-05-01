import "dotenv/config";
import express from "express";
import { initMongoDB } from "./config/mongodb.js";
import userController from "./controllers/userController.js";

const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use("/user", userController);

server.listen(80, async () => {
  console.log("server running");
  await initMongoDB();
});
