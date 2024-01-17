import { Router } from "express";
import { getAddProduct, postAddProduct } from "../controllers/adminController.js";

export const adminRouter = Router();


adminRouter.get('/add-product', getAddProduct);
adminRouter.post('/add-product', postAddProduct);
