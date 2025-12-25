import express from "express";
import { addProduct, listOneProduct, listProducts} from "../controllers/product.js";

const router = express.Router();

router.route("/").post(addProduct).get(listProducts);
router.route('/api/products/:id').get(listOneProduct)

export default router