import express from "express"
import { User } from "./models/user.js"
import { Task } from "./models/task.js"
import "./db/mongoose.js"

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post("/users", async(req,res)=>{

    const user = new User(req.body)
    
    try{
        await user.save()
        res.status(201).send(user)
    } catch{
        res.status(400).send(e)
    }
})

app.get("/users", async(req,res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }catch{
        res.status(500).send()
    }
})

app.get("/users/:id", async(req,res)=>{
    
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

app.patch("/users/:id", async(req,res)=>{
    
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

app.delete("/users/:id", async(req,res)=>{
    
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


app.post("/tasks", async(req,res)=>{
  
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }catch{
        res.status(400).send(e)
    }
})

app.get("/tasks/:id", async(req,res)=>{
    
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

app.get("/tasks", async(req,res)=>{
    try{
        const tasks = await User.find({})
        res.send(tasks)
    }catch{
        res.status(500).send()
    }
})

app.patch("/tasks/:id", async(req,res)=>{
    
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

app.delete("/tasks/:id", async(req,res)=>{
        
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

app.listen(port,()=>{
    console.log("server in up on port  "+port)
})