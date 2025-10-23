// server.mjs
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import log from './middleware/log.mjs';
import errorMiddleware from './middleware/error.mjs';
import recipesRouter from './routes/recipes.mjs';
// db connection
import { connectDB } from './utilities/recipedbcon.mjs';
await connectDB(process.env.MONGODB_URI);
// setup
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json()); 
app.use(log);

// health check
app.get('/', (_req, res) => res.send('Helpful Tía API running'));

// routes
app.use('/api/recipes', recipesRouter);

// global error handler
app.use(errorMiddleware);

// start listener
app.listen(PORT, () => console.log(`🚀 Server on :${PORT}`));
