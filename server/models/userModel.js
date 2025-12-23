import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: [true, "Your usernaame is required"]
    },
    password: {
        type: String,
        required: [true, "Your password is required"]
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 2)
})

export default mongoose.model("User", userSchema)