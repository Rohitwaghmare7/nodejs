import mongodb from "mongodb"
const MongoClient = mongodb.MongoClient

const connectionurl = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionurl,{useNewUrlParser: true},(error,client) => {
    if(error){
        return console.log("uanbale to connect to database")
    }

    const db = client.db(databaseName)
    db.collection("users").insertOne({
        name:"Rohit",
        age:20
    })
}) 