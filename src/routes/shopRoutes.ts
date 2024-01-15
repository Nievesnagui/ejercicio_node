import {Router} from "express";
import { productos } from "./adminRoutes.js";

export const shopRouter = Router();

shopRouter.get('/', (req, res, next) => {
    res.render('shop', {pageTitle:'Tienda', path:'/', prods: productos});
});

shopRouter.get('/saludo', (req, res, next) => {
    res.render('prueba', {nombre: 'Nieves'});
});