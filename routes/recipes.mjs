// routes/recipes.mjs
import express from 'express';
import Recipe from '../models/Recipe.mjs';

const router = express.Router();

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const { title, ingredients } = req.body;
    const doc = await Recipe.create({ title, ingredients });
    res.status(201).json(doc);
  } catch (err) { next(err); }
});

// READ all
router.get('/', async (_req, res, next) => {
  try {
    const list = await Recipe.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) { next(err); }
});

// READ one
router.get('/:id', async (req, res, next) => {
  try {
    const doc = await Recipe.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'not found' });
    res.json(doc);
  } catch (err) { next(err); }
});

// UPDATE
router.put('/:id', async (req, res, next) => {
  try {
    const { title, ingredients } = req.body;
    const doc = await Recipe.findByIdAndUpdate(
      req.params.id,
      { ...(title && { title }), ...(ingredients && { ingredients }) },
      { new: true, runValidators: true }
    );
    if (!doc) return res.status(404).json({ error: 'not found' });
    res.json(doc);
  } catch (err) { next(err); }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const doc = await Recipe.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: 'not found' });
    res.json({ ok: true, id: doc._id });
  } catch (err) { next(err); }
});

export default router;
