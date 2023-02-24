import express from "express"

const app = express()

app.get("",(req, res)=> {
    res.send("Hellow express!")
})

app.get("/help",(req, res) => {
    res.send("Help page")
})

app.get("/about",(req, res) => {
    res.send("About page")
})

app.get("/weather",(req, res) => {
    res.send("weather page")
})

app.listen(3000,() => {
    console.log("server is up on port 3000")
})