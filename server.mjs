// server.mjs
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./utilities/recipedbcon.mjs";
import recipesRouter from "./routes/recipesR.mjs"; 
import Recipe from "./models/recipeM.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.send("Helpful Tía API running"));
app.use("/api/recipes", recipesRouter);

await connectDB(process.env.MONGODB_URI);
app.listen(PORT, () => console.log(`🚀 Server on :${PORT}`));

