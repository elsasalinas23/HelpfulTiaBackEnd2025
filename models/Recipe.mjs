import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    ingredients: {
      type: [String],
      required: true,
      validate: v => Array.isArray(v) && v.length > 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", RecipeSchema);
