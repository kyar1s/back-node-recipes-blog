import { insertIngredient, findIngredientByName } from "../repositories/ingredientRepository.js";
import { HttpError } from "../utils/httpError.js";

export const createIngredient = async (ingredient) => {
  await insertIngredient(ingredient);
};

export const getIngredientByName = async (name) => {
  if (!name) throw new HttpError(400, "Name not provided");
  return await findIngredientByName(name);
};
