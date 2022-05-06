import express from "express";
import { roleValidation } from "../middleware/roleValidation.js";
import { createIngredient, getIngredientByName } from "../services/ingredientService.js";

const ingredientController = express.Router();

ingredientController.post("/", roleValidation("admin"), async (req, res, next) => {
  try {
    const ingredient = req.body;
    await createIngredient(ingredient);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

ingredientController.get("/:name", async (req, res, next) => {
  try {
    const { name } = req.params;
    const ingredient = await getIngredientByName(name);
    res.json(ingredient);
  } catch (err) {
    next(err);
  }
});

export default ingredientController;
