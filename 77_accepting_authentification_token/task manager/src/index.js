import express from "express"
import "./db/mongoose.js"
import { userRouter } from "./routers/user.js"
import { taskRouter } from "./routers/task.js"
import jwt from "jsonwebtoken"

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

const myfunction = async() => {
  const token = jwt.sign({_id: "abc"}, "Rohit",{expiresIn: "7 days"})
  console.log("token")

  const data = jwt.verify(token, "Rohit")
  console.log(data)
}

myfunction()