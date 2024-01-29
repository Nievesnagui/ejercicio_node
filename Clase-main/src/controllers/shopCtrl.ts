import { NextFunction, Request, Response } from "express";

import { Product } from "../models/Product.js";
import { Cart } from "../models/Cart.js";
import { it } from "node:test";


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
        res.render('shop/product-detail', { pageTitle: product.title, path: '', product: product });
    } else {
        res.status(404).render('404.ejs', { pageTitle: 'Producto no encontrado', path: '' });
    }
};

export const getCart = (req: Request, res: Response, next: NextFunction) => {
    const ci = Cart.getCart();
    const items = ci.map( ci => {
        const product = Product.findById(ci.id);
        console.log("Producto: "+product);
        if(product){
            return { 
                id: ci.id,
                title: product.title,
                price: product.price,
                qty: ci.qty
            }
        }
        return[]; //?
    });
    console.log("Get cart: "+items);
    res.render('shop/cart',{
        pageTitle:'Carro de la compra',
        path: '/cart',
        items: items,        
    });
}

export const postCart = (req: Request, res: Response, next: NextFunction) => {
    const productId = +req.body.productId;
    Cart.addProduct(productId, 1);
    res.redirect('/cart');

}

export  const deleteCartItem = (req: Request, res: Response, next: NextFunction) => {
    const productId = +req.body.productId;
    Cart.deleteProduct(productId);
    res.redirect('/cart');

}


