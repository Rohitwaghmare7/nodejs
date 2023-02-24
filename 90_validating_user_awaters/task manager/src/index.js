import express from "express"
import "./db/mongoose.js"
import { userRouter } from "./routers/user.js"
import { taskRouter } from "./routers/task.js"
import multer from "multer"

const app = express()
const port = process.env.PORT || 3000

const upload = multer({
    dest: "images",
    limits:{
        fileSize: 1000000
},
fileFilter(req, file, cb)
{
    console.log(file)
    if(!file.originalname.match(/\.(png|jpg)$/)) {
        cb(new Error("please uplode image only"))
    }
    cb(undefined, file)
}
})

app.post("/upload", upload.single("upload"),(req, res) => {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log("server in up on port  "+port)
})

 


