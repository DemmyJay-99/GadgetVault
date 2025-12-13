import Product from "../models/product.js";

const addProduct = async(req, res) =>{
    try{
        const product = await Product.create(req.body)
        res.status(201).json({product})
    } catch (error){
        res.send(error)
        console.log(error)
    }
}
const listProducts = async(req, res) =>{
    try{
        const product = await Product.find({})
        res.status(201).json({product})
    } catch (error){
        res.send(error)
        console.log(error)
    }
}

export {
    addProduct,
    listProducts
}