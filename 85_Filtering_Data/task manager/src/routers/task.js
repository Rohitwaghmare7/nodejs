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

taskRouter.get("/tasks/:id",auth, async(req,res)=>{
    
    const _id = req.params.id
    
    try{
    const task = await Task.findOne({_id,"owner":req.user._id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch{
        res.status(500).send()
    }
})
//Get /tasks?completed=true
taskRouter.get("/tasks",auth, async(req,res)=>{
    const match = {}

    if(req.query.completed){
        match.completed = req.query.completed === "true"
    }
    try{
        await req.user.populate({
            path: "tasks",
            match
        })
        res.send(req.user.tasks)
    }catch(e){
        res.status(500).send()
    }
})

taskRouter.patch("/tasks/:id",auth, async(req,res)=>{
    
    const updates = Object.keys(req.body)
    const allowedUpdates = ["completed","description"]
    const isValidOperation = updates.every((update)=>
        allowedUpdates.includes(update))
    if (!isValidOperation){
        return res.status(400).send({error:"invlid updates!"})
    }    

    try{
        const task = await Task.findOne({"_id": req.params.id,"owner":req.user._id})
        if(!task){
            return res.status(404).send()
        }
        updates.forEach((update) => task[update]= req.body[update])
        await task.save()
        res.send(task)
    }catch {
        res.status(400).send()
    }
})

taskRouter.delete("/tasks/:id",auth, async(req,res)=>{
        
    try{
    const task = await Task.findByIdAndDelete({"_id": req.params.id,"owner":req.user._id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch{
        res.status(500).send()
    }
})
