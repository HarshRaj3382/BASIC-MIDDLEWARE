const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");
let port=8080;

// app.use((req,res ,next)=>{
//     console.log("hi , i am first middleware1");
//     next();
// });

// app.use((req,res ,next)=>{
//     console.log("hi , i am first middleware2");
//     next();
// });

const checkToken=(req,res,next)=>{
 let {token}=req.query;
 if(token==="giveaccess"){
    next();
 }
 throw new ExpressError(401,"ACCESS DENIED");
};

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.use((err,req,res,next)=>{
    let {status,message}=err;
    res.status(status).send(message);
    
})

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

app.get("/hello",(req,res)=>{
    res.send("hi, i am Hello");
})

app.listen(8080,()=>{
    console.log("server listing on port 8080");
})
