import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import connectURI from './db/connect.js';
import router from "./routes/products.js";
dotenv.config()

const app = express();
const URI = process.env.MONGO_URI
app.use(express.static("./public"))
app.use(express.json())
app.use(cors())
app.use("/api/products", router)

const start = async()=>{
    try {
        await connectURI(URI);
        app.listen(3000, ()=>{
            console.log("server Running")
        })
    } catch (error) {
        console.error(error)
    }
}

start()