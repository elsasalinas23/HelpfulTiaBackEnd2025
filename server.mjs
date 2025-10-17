// server.mjs
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import errorMiddleware from './middleware/error.mjs';
import recipesRouter from './routes/recipes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json()); 

// db connect
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// health check
app.get('/', (_req, res) => res.send('Helpful Tía API running'));

// mount CRUD routes
app.use('/api/recipes', recipesRouter);

// global error handler
app.use(errorMiddleware);

// start
app.listen(PORT, () => console.log(`🚀 Server on :${PORT}`));
