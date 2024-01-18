import { Request, Response, NextFunction } from "express";

import { Product } from "../models/Product.js";

export const getIndex = (req: Request, res: Response, next: NextFunction) => {
    res.render('shop/index', { pageTitle: 'Tienda', path: '/' });
};

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
    res.render('shop/product-list', { pageTitle: 'Lista Productos', path: '/products', prods: Product.fetchAll() });
};

export const getProductById = (req: Request, res: Response, next: NextFunction) => {
    const productId = +req.params.productId;
    const product = Product.findById(productId);
    if (product) {
        res.render('shop/product-detail', { pageTitle: product.title, path: '/products', prods: product });
    } else {
        res.status(404).render('404.ejs', {pageTitle:"404", path:''});
    }
};

export const getSaludo = (req: Request, res: Response, next: NextFunction) => {
    res.render('prueba', { nombre: 'Nieves' });
};