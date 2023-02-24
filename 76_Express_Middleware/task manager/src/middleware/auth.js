import jwt from "jsonwebtoken"
import { User } from "../models/user.js"

export const auth = async(req,res,next) => {
    try{
        const token = req.header("Authorization").replace("Bearer ","")
        const decoded =jwt.verify(token, "Rohit")
        const user = await User.findOne({_id: decoded._id,"tokens:token": token})
        
        if(!user){
            throw new Error()
        }

        res.user = user
        next()
    }
    catch(e){
        res.status(401).send({error: "please authenticate!"})
    }
}