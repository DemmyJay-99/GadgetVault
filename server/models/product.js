import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [20]
    },
    description: {
        type: String,
        required: true,
        maxlength: [100]
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        maxlength: [20]
    }
})

export default mongoose.model("Product", ProductSchema)