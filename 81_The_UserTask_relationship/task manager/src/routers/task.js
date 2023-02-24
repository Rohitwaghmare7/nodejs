import express  from "express"
import { Task } from "../models/task.js"
import { auth } from "../middleware/auth.js"
export const taskRouter = express.Router()

taskRouter.post("/tasks", auth, async(req,res)=>{
  
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

taskRouter.get("/tasks/:id", async(req,res)=>{
    
    const _id = req.params.id
    
    try{
    const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch{
        res.status(500).send()
    }
})

taskRouter.get("/tasks", async(req,res)=>{
    try{
        const tasks = await Task.find({})
        res.send(tasks)
    }catch{
        res.status(500).send()
    }
})

taskRouter.patch("/tasks/:id", async(req,res)=>{
    
    const updates = Object.keys(req.body)
    const allowedUpdates = ["completed","description"]
    const isValidOperation = updates.every((update)=>
        allowedUpdates.includes(update))
    if (!isValidOperation){
        return res.status(400).send("inalid updates!")
    }    

    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runvalidators: true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch {
        res.status(400).send()
    }
})

taskRouter.delete("/tasks/:id", async(req,res)=>{
        
    try{
    const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch{
        res.status(500).send()
    }
})
