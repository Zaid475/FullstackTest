import myexpress from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import Usermodel from "./model/schema.js";

const app=myexpress();
app.use(cors())
dotenv.config();
app.use(myexpress.json())
app.get("/todos",async (req,res)=>{
    try{
    const todoexists=await Usermodel.find({})
    if(!todoexists){
        return res.json({
            message:"data not found",
            success:"false"
        })
    }
    return res.json({
        todoexists,
        message:"Data fetched",
        success:true


    })
}
catch(error){
    return res.json({
        message:"error occured",
        success:"false"
    })

}


    



})
app.post("/addtodo", async (req, res) => {
    try {
        const { task } = req.body;

        if (!task) {
            return res.status(400).json({ success: false, message: "Task is required" });
        }

        const newUser = new Usermodel({ task:task });
        await newUser.save();

        return res.json({ message: "Task successfully added", success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while saving the task" });
    }
});



    



    









mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("mongoose connected")
})









app.listen(8000,()=>{
    console.log("server running on port 8000")
    

})