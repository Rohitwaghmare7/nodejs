import validator from "validator"
import mongoose from "mongoose"
import bcrypt from "bcrypt"

export const UserSchema = mongoose.Schema({
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
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password cannot contain password!")
            }
        }   
    }
})

UserSchema.pre("save",async function(next){
    const user = this

    if(user.isModified("password"))
    {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

export const User = mongoose.model("User",UserSchema)