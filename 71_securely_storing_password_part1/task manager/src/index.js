import express from "express"
import "./db/mongoose.js"
import { userRouter } from "./routers/user.js"
import { taskRouter } from "./routers/task.js"
import bcrypt from "bcrypt"

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log("server in up on port  "+port)
})

const myfunction = async() => {
    const password = "Rohit@123"
    const hashedpassword = await bcrypt.hash(password,8)

    console.log(password)
    console.log(hashedpassword)

    const ismatch = await bcrypt.compare("Rohit@123",hashedpassword)
    console.log(ismatch)
}

myfunction()