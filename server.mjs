// Imports 
import express from "express";


// Setups
const app = express();
const PORT = 3000; 


// Middelwares 



// Routes 
app.get('/',(req,res)=>{
    res.send(`Testing`)
})



// Global Error Handling Middleware 


//  Server Listener
app.listen(PORT, ()=>{
    console.log(`Sever Running on Port: ${PORT}`);
}); 