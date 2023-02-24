import "../src/db/mongoose.js"
import {User} from "../src/models/user.js"

User.findByIdAndUpdate("624040b61d2fb5201e862e22",{
    age: 1 }).then((user)=>{
        console.log(user)
        return User.countDocuments({ age:1 })
    }).then((result)=>{
        console.log(result)
    }).catch((e)=>{
        console.log(e)
    })
