import { Router } from "express";
import { getAddProduct, getEditProduct, getProducts, postAddProduct } from "../controllers/adminController.js";

export const adminRouter = Router();

adminRouter.get('/products', getProducts)
adminRouter.get('/add-product', getAddProduct);
adminRouter.post('/add-product', postAddProduct);
adminRouter.get('/add-product/:productId', getEditProduct);
