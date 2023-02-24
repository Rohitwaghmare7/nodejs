import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
    useNewUrlParser: true,
    // useCreateIndex: true
})

const User = mongoose.model("User",{
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const task = mongoose.model("task",{
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const me = new User({
    name:"Rohit",
    age:20
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log("error! "+error)
})

const he = new task({
    description:"collage exam",
    completed:true
})

he.save().then(()=>{
    console.log(he)
}).catch((error)=>{
    console.log("error! "+error)
})

