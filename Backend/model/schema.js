import { Schema,model } from "mongoose"

const Userschema=new Schema({

    task:String



})

const Usermodel=model("Usermodel",Userschema)

export default Usermodel;