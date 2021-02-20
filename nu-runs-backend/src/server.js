import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("I visited to your website on port 8000")
})
app.listen(8000,()=>
    console.log("Listening to port 8000")
);