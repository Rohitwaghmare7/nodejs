import {ObjectID}  from "mongodb"
import mongodb from "mongodb"
const MongoClient = mongodb.MongoClient

const connectionurl = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionurl,{useNewUrlParser: true},(error,client) => {
    if(error){
        return console.log("uanbale to connect to database")
    }
    const db = client.db(databaseName)

    db.collection("users").findOne({_id: new ObjectID ("623ae62654dff0877f3f2643")},(error,user)=> {
        if(error){
            return console.log("unable to fetch")
        }
        console.log(user)
    })

    db.collection("users").find({age:20, name:"Rohit"}).toArray((error,users)=>{
        if(error){
           return console.log("unable to find")
        }
        console.log(users)
    })

    db.collection("Tasks").findOne({_id: new ObjectID ("623af4bf789755863e64e743")},(error,user)=> {
        if(error){
            return console.log("unable to fetch")
        }
        console.log(user)
    })

    db.collection("Tasks").find({completed:false}).toArray((error,users)=>{
        if(error){
            console.log("unable to find")
        }
        console.log(users)
    })
})   