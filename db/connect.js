import mongoose from "mongoose";

const connectURI = (URI)=>{
   return mongoose.connect(URI).then(()=>{
        console.log("CONNECTED TO MONGODB")
    })
}

export default connectURI