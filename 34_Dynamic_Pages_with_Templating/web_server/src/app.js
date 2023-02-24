import express from "express"
import path from "path"

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const publicDirectoryPath = path.join(__dirname,"../public")

app.set("view engine","hbs")
app.use(express.static(publicDirectoryPath))

app.get("",(req, res)=> {
    res.render("index",{
        title: "Weather App",
        name: "Rohit"
    })
})   

app.get("/help",(req, res) => {
    res.render("help",{
        helpText: "This is help text"
    })
})

app.get("/about",(req, res) => {
    res.render('about',{
        title:"About",
        name: "Rohit" 
    })
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