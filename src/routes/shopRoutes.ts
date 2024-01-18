import {Router} from "express";
import { getIndex, getProducts, getSaludo, getProductById } from "../controllers/shopController.js";


export const shopRouter = Router();

shopRouter.get('/', getIndex);
shopRouter.get('/products', getProducts);
shopRouter.get('/products/:productId', getProductById);
shopRouter.get('/saludo', getSaludo);