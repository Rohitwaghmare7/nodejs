import mongoose from "mongoose"

export const Task = mongoose.model("task",{
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