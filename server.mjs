// server.mjs
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./utilities/recipedbcon.mjs";
import recipesRouter from "./routes/recipesR.mjs"; 
import Recipe from "./models/recipeM.mjs";
import error from "./middleware/error.mjs"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//health check 
app.get("/", (_req, res) => res.send("Helpful Tía API running"));

//routes
app.use("/api/recipes", recipesRouter);

// connect to DB --wait if fails
await connectDB(process.env.MONGODB_URI);

//  error middlewares 
app.use(error)


//listener 
app.listen(PORT, () => console.log(`🚀 Server on :${PORT}`));

