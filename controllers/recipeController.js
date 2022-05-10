import express from "express";
import { roleValidation } from "../middleware/roleValidation.js";
import { createRecipe, getAllRecipes, getRecipeByTitle, getRecipesWithLimit } from "../services/recipeService.js";
import { OFFSET, LIMIT } from "../utils/constants.js";

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

recipeController.get("/listing:limit?:offset?", async (req, res, next) => {
  try {
    const { limit = LIMIT, offset = OFFSET } = req.query;
    const recipes = await getRecipesWithLimit(limit, offset);
    res.json(recipes);
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

recipeController.get("/all", async (req, res, next) => {
  try {
    const recipes = await getAllRecipes();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

export default recipeController;
