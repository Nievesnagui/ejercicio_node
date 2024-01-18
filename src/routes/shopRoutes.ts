import {Router} from "express";
import { getIndex, getProducts, getSaludo } from "../controllers/shopController.js";


export const shopRouter = Router();

shopRouter.get('/', getIndex);
shopRouter.get('/products', getProducts);
shopRouter.get('/saludo', getSaludo);