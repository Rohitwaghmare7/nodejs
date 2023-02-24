const fs = require("fs")

const book = {
    title: "The Alchemist",
    author: "paulo choelho"
}
const look = {
    name: "Rohit",
    age: "20",
    country: "India"
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync("1-json.json", bookJSON)

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()

const data = JSON.parse(dataJSON)

console.log(data)
console.log("Book Name: "+data.title, "\nAuther Name: "+ data.author)

const lookJSONN = JSON.stringify(look)
fs.writeFileSync("2-json.json", lookJSONN)

const dataBufferr = fs.readFileSync("2-json.json")
const dataJSONN = dataBufferr.toString()

const dataa = JSON.parse(dataJSONN)

console.log(dataa)
console.log("Name: "+dataa.name, "\nage: "+ dataa.age, "\ncountry: "+dataa.country)