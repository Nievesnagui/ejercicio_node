import { Request, Response, NextFunction } from "express";
import { Product } from "../models/Product.js";

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log("Devolver formulario para meter productos");
    res.render('admin/add-product', { pageTitle: "Formulario", path: "/admin/add-product" });
}

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = +req.body.price; //El + es para que se transforme a número

    if (req.body.title) {
        console.log('Ha llegado el siguiente producto', req.body.title);
        const product = new Product(
            title, imageUrl, description, price
        );
        product.save();
    }
    res.redirect('/');
}