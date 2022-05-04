import express from "express";
import { roleValidation } from "../middleware/roleValidation.js";
import { createRecipe, getRecipeByTitle } from "../services/recipeService.js";

const recipeController = express.Router();

recipeController.post("/", roleValidation("admin"), async (req, res, next) => {
  try {
    const recipe = req.body;
    await createRecipe(recipe);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

recipeController.get("/:title", async (req, res, next) => {
  try {
    const { title } = req.params;
    const recipe = await getRecipeByTitle(title);
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

export default recipeController;
