import mongoose from "mongoose"

export const Task = mongoose.model("Task",{
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