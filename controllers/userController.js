import express from "express";
import { createUser, getUserByEmail } from "../services/userService.js";

const userController = express.Router();

userController.get("/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await getUserByEmail(email);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

userController.post("/", async (req, res, next) => {
  try {
    const user = req.body;
    await createUser(user);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default userController;