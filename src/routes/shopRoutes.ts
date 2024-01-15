import {Router} from "express";

export const shopRouter = Router();

shopRouter.get('/', (req, res, next) => {
    res.render('shop', {pageTitle:'Tienda', path:'/', prods: [{title: 'libro'}]});
});

shopRouter.get('/saludo', (req, res, next) => {
    res.render('prueba', {nombre: 'Nieves'});
});