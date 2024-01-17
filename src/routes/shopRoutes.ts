import {Router} from "express";
import { getIndex, getSaludo } from "../controllers/shopController.js";


export const shopRouter = Router();

shopRouter.get('/', getIndex);

shopRouter.get('/saludo', getSaludo);