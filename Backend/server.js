import myexpress from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import Usermodel from "./model/schema.js";

const app=myexpress();
app.use(cors())
dotenv.config();
app.use(myexpress.json())
app.get("/todos",(req,res)=>{



    return res.send(".get api hitted")



})
app.post("/addtodo",(req,res)=>{
    const{task}=req.body.Userdata;
    



    const Newuser=new Usermodel({
        task:task

    })

    Newuser.save();

    return res.json({message:"Data stored",success:true})

    



    

})







mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("mongoose connected")
})









app.listen(8000,()=>{
    console.log("server running on port 8000")
    

})