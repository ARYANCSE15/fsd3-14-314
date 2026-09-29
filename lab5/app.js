import express from 'express';

const app =express();

app.get("/",(req,res)=>{
    res.send("<h1> Hello Express");
});
app.listen(4000,()=> console.log("Server is running"));