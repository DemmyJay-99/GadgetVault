import dotenv from "dotenv";
import express from "express";
const app = express();
import cors from 'cors'
import connectURI from './db/connect.js';
import route from "./routes/AuthRoute.js";
import router from "./routes/products.js";
import cookieParser from "cookie-parser"
dotenv.config()

const URI = process.env.MONGO_URI
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/", route)
app.use("/api/products", router)
const start = async()=>{
    try {
        await connectURI(URI);
        app.listen(4000, ()=>{
            console.log("server Running")
        })
    } catch (error) {
        console.error(error)
    }
}

start()