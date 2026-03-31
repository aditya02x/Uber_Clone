import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:3,
    },
    lastname:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select:false
    },
    socketId:{
        type:String,
    }
},{timestamps:true})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:"7d"})
    return token;
} 

userSchema.static.hashPassword = async function(password){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
}

export default mongoose.model("User",userSchema)