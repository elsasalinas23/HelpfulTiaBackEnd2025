// Imports 
import express from "express";
import errorMiddleware from "./middleware/error.mjs"


// Setups
const app = express();
const PORT = 3000; 


// Middelwares 



// Routes
app.get("/", (req, res) => {
  res.send("Testing, Home path");
});

app.post("/", (req, res) => {
  res.send(`Testing, Post Route`);
});

app.put("/", (req, res) => {
  res.send("Testing, Put Route");
});

app.delete("/", (req, res) => {
  res.send("Testing, Delete Route");
});

// Global Error Handling Middleware 
app.use(errorMiddleware);

//  Server Listener
app.listen(PORT, ()=>{
    console.log(`Sever Running on Port: ${PORT}`);
}); 