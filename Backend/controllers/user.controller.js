import User from "../models/User.model.js";



 export const registerUser = async (req,res)=>{
    try {
        
    } catch (error) {
            console.error("Error in registerUser controller",error);
            res.status(500).json({message:"Internal Server Error"});

        
    }
 }