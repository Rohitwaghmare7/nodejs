import mongoose from "mongoose"
import validator from "validator"

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
    useNewUrlParser: true,
    // useCreateIndex: true
})

const User = mongoose.model("User",{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid!")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error("age must be a positve number")
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength:6,
        validate(value){
            if(value == "password"){
                throw new Error("Password is invalid")
            }
        }   
    }
})

const task = mongoose.model("task",{
    description: {
        type: String,
        trim: true,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const me = new User({
    name:"Rohit",
    age:20,
    email: "rohit98waghmare@gmail.com",
    password: "password123"
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

