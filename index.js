import "dotenv/config";
import express from "express";
import { initMongoDB } from "./config/mongodb.js";
import userController from "./controllers/userController.js";
import ingredientController from "./controllers/ingredientController.js";
import authController from "./controllers/authController.js";
import { tokenValidation } from "./middleware/tokenValidation.js";
import { errorHandler } from "./middleware/errorHandler.js";

const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use(tokenValidation);

server.use("/user", userController);
server.use("/ingredient", ingredientController);
server.use("/auth", authController);

server.use(errorHandler);

server.listen(8080, async () => {
  console.log("server running");
  await initMongoDB();
});
