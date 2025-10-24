import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    ingredients: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model('Recipe', RecipeSchema);

