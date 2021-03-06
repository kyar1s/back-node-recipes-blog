import { Ingredient } from "../models/ingredient.js";

export const insertIngredient = async (ingredientDetails) => {
  const ingredient = new Ingredient(ingredientDetails);
  await ingredient.save();
};

export const findIngredientByName = async (name) => {
  return await Ingredient.findOne({ name });
};

export const findIngredientsByNames = async (names) => {
  return await Ingredient.find({ name: names });
};
