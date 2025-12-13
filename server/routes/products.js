import express from "express";
import { addProduct, listProducts} from "../controllers/product.js";

const router = express.Router();

router.route("/").post(addProduct).get(listProducts);

export default router