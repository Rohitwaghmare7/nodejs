import express from "express"
import path from "path"

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const publicDirectoryPath = path.join(__dirname,"../public/")
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath))

app.get("",(req, res)=> {
    res.send({
        forecast: "it is not here",
        location: "Aurangabad"
    })
})   

app.get("/help",(req, res) => {
    res.send([{
        name : "Rohit"
    },{
        surname : "Waghmare"
    }])
})

app.get("/about",(req, res) => {
    res.send("<h1>About page</h1>")
})

app.get("/weather",(req, res) => {
    res.send({
        forecast: "It is hot here.",
        location: "Aurangabad"
    })
})

app.listen(3000,() => {
    console.log("server is up on port 3000")
})