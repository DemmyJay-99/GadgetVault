import express from "express";
import addProduct from "../controllers/product.js";

const router = express.Router();

router.route("/").post(addProduct);

export default router