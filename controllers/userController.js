import express from "express";
import { roleValidation } from "../middleware/roleValidation.js";
import { createUser, getUserByEmail } from "../services/userService.js";

const userController = express.Router();

userController.get("/me", roleValidation("user"), async (req, res, next) => {
  try {
    const { email } = req.user;
    const user = await getUserByEmail(email);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

userController.get("/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await getUserByEmail(email);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

userController.post("/", async (req, res, next) => {
  try {
    const user = req.body;
    await createUser(user);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

export default userController;
