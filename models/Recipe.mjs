import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: [true, "title is required"], trim: true },
  ingredients: {
    type: [String],
    required: [true, "ingredients is required"],
    validate: {
      validator(v) { return Array.isArray(v) && v.length > 0; },
      message: "ingredients must be a non-empty array"
    }
  }
}, { timestamps: true });

export default mongoose.model('Recipe', RecipeSchema);
