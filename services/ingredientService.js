import { insertIngredient, findIngredientByName } from "../repositories/ingredientRepository.js";

export const createIngredient = async (ingredient) => {
  await insertIngredient(ingredient);
};

export const getIngredientByName = async (name) => {
  if (!name) throw new Error("Name not provided");
  return await findIngredientByName(name);
};
