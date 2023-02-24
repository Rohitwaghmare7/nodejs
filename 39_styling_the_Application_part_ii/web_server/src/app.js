import express from "express"
import path from "path"
import hbs from "hbs"

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const publicDirectoryPath = path.join(__dirname,"../public/")
const viewsPath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs")
app.set("views",viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.get("",(req, res)=> {
    res.render("index",{
        title: "Weather App",
        name: "Rohit"
    })
})   

app.get("/help",(req, res) => {
    res.render("help",{
        title: "help",
        helpText: "This is help text",
        name: "Rohit" 
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

app.get("/help/*",(req, res) => {
    res.render("404",{
        title: "404",
        errormessage: "help artical is not found",
        name: "Rohit" 
    })
})

app.get("*",(req, res) => {
    res.render("404",{
        title: "404",
        errormessage: "page not found",
        name: "Rohit" 
    })
})

app.listen(3000,() => {
    console.log("server is up on port 3000")
})