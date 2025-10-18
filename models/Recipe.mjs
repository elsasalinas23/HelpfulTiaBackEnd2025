// models/Recipe.mjs
import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  ingredients: {
    type: [String],
    required: true,
  validate: function(v) {
  // make sure it's an array
  if (!Array.isArray(v)) {
    return false;
  }
// make sure it's not empty
  if (v.length === 0) {
    return false;
  }
// if both are good
  return true;
 },
    },
  },
  { timestamps: true } // <-- schema options belong as the SECOND argument
);
export default mongoose.model('Recipe', RecipeSchema);