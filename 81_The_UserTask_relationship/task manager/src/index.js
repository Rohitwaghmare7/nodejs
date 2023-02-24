import express from "express"
import "./db/mongoose.js"
import { userRouter } from "./routers/user.js"
import { taskRouter } from "./routers/task.js"
import { Task } from "./models/task.js"
import { User } from "./models/user.js"

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next) => {
//   //consol.log(req.method,req.path)
//   //next()

//   if(req.method == "GET"){
//     res.send("GET request are disabled")
//   }
//   else{
//     next()
//   }
// })

// //app.use((req,res,next)=>{
//   res.status(501).send("site is not available")
// }) 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log("server in up on port  "+port)
})

const main = async () => {
  const task = await Task.findById("625abda0d7474c06b9969845")
  await task.populate("owner") 
  console.log(task.owner)

  // const user = await User.findById("625abd44d7474c06b9969840")
  // // console.log(user)
  // await user.populate("tasks")
  // console.log(user.tasks)
}

main()
 


