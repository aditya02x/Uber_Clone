import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async ()=>{
   try {
     await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongoose has beenn coneect sucessfully")
   } catch (error) {
    console.error(error)
    console.log("Failed to conect DATABASE")
    
   }
}

export default connectDB;