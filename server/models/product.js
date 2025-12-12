import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [20]
    },
    price: {
        type: Number,
        required: true,
    }
})

export default mongoose.model("Product", ProductSchema)