import express from "express"
import "./db/mongoose.js"
import { userRouter } from "./routers/user.js"
import { taskRouter } from "./routers/task.js"

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

const pet = {
  name: 'Choti'
}

pet.toJSON = function() {
  return {}
}

console.log(JSON.stringify())

