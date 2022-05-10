import { Recipe } from "../models/recipe.js";

export const insertRecipe = async (recipeDetails) => {
  const recipe = new Recipe(recipeDetails);
  await recipe.save();
};

export const findRecipeByTitle = async (title) => {
  return await Recipe.findOne({ title });
};

export const findRecipesByTitles = async (titles) => {
  return await Recipe.find({ title: titles });
};

export const findAllRecipes = async () => {
  return await Recipe.find();
};

export const findRecipesWithLimit = async (limit, offset) => {
  return await Recipe.find()
    .limit(limit)
    .skip(limit * offset);
};
