import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, toLowerCase: true },
  kcal: { type: Number, required: true },
  fat: { type: Number, required: true },
  carb: { type: Number, required: true },
  protein: { type: Number, required: true },
  water: { type: Number },
  vitamin: { type: Number },
  mineral: { type: Number },
});

export const Ingredient = mongoose.model("Ingredient", ingredientSchema);
