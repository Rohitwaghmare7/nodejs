import express  from "express"
import { User } from "../models/user.js"
export const userRouter = express.Router()
import { auth } from "../middleware/auth.js"
import multer from "multer"

userRouter.post("/users", async(req,res)=>{

    const user = new User(req.body)
    
    try{
        const token = await user.generateAuthToken()
        await user.save()
        res.status(201).send({user,token})
    } catch{
        res.status(400).send()
    } 
})

userRouter.post('/users/login', async(req, res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }
    catch(e){
        res.status(400).send()
    }
})

userRouter.get("/users/me",auth, async(req,res)=>{

    // console.log(req.user)

    // try{
    //     const users = await User.find({})
    //     res.send(users)
    // }catch(e){
    //     res.status(500).send()
    // }
    res.send(req.user)
})

userRouter.patch("/users/me", auth, async(req,res)=>{
    
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name","email","password","age"]
    const isValidOperation = updates.every((update)=>
        allowedUpdates.includes(update))
    if (!isValidOperation){
        return res.status(400).send( {error: "Invalid updates!"})
    }    

    try{
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    }catch (e){
        res.status(400).send(e)
    }
})

userRouter.delete("/users/me", auth, async(req,res)=>{

    console.log(req.user)
    
    try{
        await req.user.remove()
        res.send(req.user)
    }catch (e){
        res.status(500).send()
    }
})

userRouter.post('/users/logout',auth, async(req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send("user is logged out")
    }
    catch (e){
        res.status(500).send()
    }
})

userRouter.post('/users/logoutAll',auth, async(req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send("All users are logged out")
    }
    catch (e){
        res.status(500).send()
    }
})

const upload = multer({
    dest: "avatar",
    limits:{
        fileSize: 1000000
},
fileFilter(req, file, cb)
{
    console.log(file)
    if(!file.originalname.match(/\.(png|jpg)$/)) {
        cb(new Error("please uplode image only"))
    }
    cb(undefined, true)
}
})

userRouter.post("/users/me/avatar" ,upload.single("avatar"),(req,res)=>{
   
  
        res.status(200).send()
},(error, req, res, next)=>{
        res.status(400).send({error: error.message})
    })