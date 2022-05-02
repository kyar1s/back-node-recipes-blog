import express from "express";
import { signUpUser, logIn } from "../services/authService.js";

const authController = express.Router();

authController.post("/signup", async (req, res, next) => {
  try {
    await signUpUser(req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

authController.post("/login", async (req, res, next) => {
  try {
    res.json(await logIn(req.body));
  } catch (err) {
    next(err);
  }
});

export default authController;
