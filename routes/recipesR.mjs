import express from "express";
import Recipe from '../models/recipeM.mjs';   
const router = express.Router();

// Convert "a, b, c" → ["a","b","c"]
function toArray(input) {
  if (Array.isArray(input)) return input;
  if (typeof input === "string") {
    return input.split(",").map(s => s.trim()).filter(Boolean);
  }
  return [];
}

/* CREATE: POST /api/recipes
   body: { title: string, ingredients: string[] | "a,b,c" }
*/
router.post("/", async (req, res) => {
  try {
    console.log("POST /api/recipes body =", req.body);
    const { title, ingredients } = req.body || {};
    const arr = toArray(ingredients);

    if (!title || arr.length === 0) {
      return res.status(400).json({
        error: "invalid payload",
        required: '{ "title": "string", "ingredients": ["a","b"] or "a,b" }'
      });
    }

    const doc = await Recipe.create({ title, ingredients: arr });
    return res.status(201).json(doc);
  } catch (err) {
    console.error("POST /api/recipes 500", err);
    return res.status(500).json({ error: "server error", message: err.message });
  }
});

/* READ ALL: GET /api/recipes */
router.get("/", async (_req, res) => {
  try {
    const list = await Recipe.find().sort({ updatedAt: -1, createdAt: -1 });
    return res.json(list);
  } catch (err) {
    console.error("GET /api/recipes 500", err);
    return res.status(500).json({ error: "server error", message: err.message });
  }
});

/* READ ONE: GET /api/recipes/:id */
router.get("/:id", async (req, res) => {
  try {
    const doc = await Recipe.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "not found" });
    return res.json(doc);
  } catch (err) {
    console.error("GET /api/recipes/:id 500", err);
    return res.status(500).json({ error: "server error", message: err.message });
  }
});

/* UPDATE: PUT /api/recipes/:id
   body can include: { title?: string, ingredients?: string[] | "a,b" }
*/
router.put("/:id", async (req, res) => {
  try {
    console.log("PUT /api/recipes/:id", req.params.id, req.body);

    const update = {};
    if (typeof req.body.title === "string") update.title = req.body.title;

    if (typeof req.body.ingredients !== "undefined") {
      const arr = toArray(req.body.ingredients);
      if (arr.length === 0) {
        return res.status(400).json({ error: "ingredients must not be empty" });
      }
      update.ingredients = arr;
    }

    const doc = await Recipe.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });
    if (!doc) return res.status(404).json({ error: "not found" });
    return res.json(doc);
  } catch (err) {
    console.error("PUT /api/recipes/:id 500", err);
    return res.status(500).json({ error: "server error", message: err.message });
  }
});

/* DELETE: DELETE /api/recipes/:id */
router.delete("/:id", async (req, res) => {
  try {
    const doc = await Recipe.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "not found" });
    return res.json({ ok: true, id: req.params.id });
  } catch (err) {
    console.error("DELETE /api/recipes/:id 500", err);
    return res.status(500).json({ error: "server error", message: err.message });
  }
});

export default router;
