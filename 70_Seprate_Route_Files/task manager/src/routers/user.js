import express  from "express"
import { User } from "../models/user.js"

export const userRouter = express.Router()

userRouter.post("/users", async(req,res)=>{

    const user = new User(req.body)
    
    try{
        await user.save()
        res.status(201).send(user)
    } catch{
        res.status(400).send(e)
    }
})

userRouter.get("/users", async(req,res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }catch{
        res.status(500).send()
    }
})

userRouter.get("/users/:id", async(req,res)=>{
    
    const _id = req.params.id

    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    }catch {
        res.status(500).send()
    }
})

userRouter.patch("/users/:id", async(req,res)=>{
    
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name","email","password","age"]
    const isValidOperation = updates.every((update)=>
        allowedUpdates.includes(update))
    if (!isValidOperation){
        return res.status(400).send("inalid updates!")
    }    

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runvalidators: true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch {
        res.status(400).send()
    }
})

userRouter.delete("/users/:id", async(req,res)=>{
    
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch {
        res.status(500).send()
    }
})