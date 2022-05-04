import { findIngredientsByNames } from "../repositories/ingredientRepository.js";
import { insertRecipe, findRecipesByTitles, findRecipeByTitle } from "../repositories/recipeRepository.js";
import { HttpError } from "../utils/httpError.js";
import { calculateMacros } from "../utils/macrosCalculator.js";
import groupBy from "lodash.groupby";

export const createRecipe = async (recipe) => {
  const { ingredient: typeIngredient, recipe: typeRecipe } = groupBy(recipe.ingredients_ref, "type");

  const ingredientsNames = typeIngredient && typeIngredient.map((ing) => ing.name);
  const recipesTitles = typeRecipe && typeRecipe.map((rec) => rec.name);

  const ingredientsInfo = typeIngredient ? await findIngredientsByNames(ingredientsNames) : [];
  const recipesInfo = typeRecipe ? await findRecipesByTitles(recipesTitles) : [];

  const totalIngredientsInfo = [...ingredientsInfo, ...recipesInfo].map((ing) => {
    const { quantity } = recipe.ingredients_ref.find(({ name }) => name === ing.name || name === ing.title);
    return { ...ing.toJSON(), quantity };
  });

  const macros = calculateMacros(totalIngredientsInfo);

  await insertRecipe({ ...recipe, ...macros });
};

export const getRecipeByTitle = async (title) => {
  if (!title) throw new HttpError(400, "Title not provided");
  return await findRecipeByTitle(title);
};
