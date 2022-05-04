import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, toLowerCase: true },
  description: { type: String, required: true },
  instructions: { type: String, required: true },
  portions: { type: Number, required: true },
  preparation_time: { type: String, required: true },
  ingredients_ref: [
    {
      name: { type: String, required: true },
      type: { type: String, enum: ["ingredient", "recipe"], default: "ingredient", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  kcal: { type: Number, required: true },
  fat: { type: Number, required: true },
  carb: { type: Number, required: true },
  protein: { type: Number, required: true },
  images: [String],
  categories: [String],
  likes: { type: Number, default: 0 },
});

export const Recipe = mongoose.model("Recipe", recipeSchema);
