import { Request, Response, NextFunction } from "express";
import { productos } from "../models/Product.js";

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log("Devolver formulario para meter productos");
    //res.send('<FORM action="/admin/product" method="POST"><input type="text" name="producto"> <button type="submit">Enviar</button></FORM>');
    res.render('admin/add-product', { pageTitle: "Formulario", path: "/admin/add-product" });
}

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = +req.body.price; //El + es para que se transforme a número

    if (req.body.title) {
        console.log('Ha llegado el siguiente producto', req.body.title);
        productos.push({ 
            title: title, 
            imageUrl: imageUrl, 
            description: description, 
            price: price });
    }
    res.redirect('/');
}