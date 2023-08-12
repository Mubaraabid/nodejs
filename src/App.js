import express from "express";
import studentRouter from "./router/student.js";
const app=express();



app.get("/",(req, res)=>{
    return res.json({message:"hello world"});
});


app.use(studentRouter);
app.listen(3300,()=>{
    console.log("listening on 3300");
});