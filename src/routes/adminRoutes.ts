import {Router} from "express";

export const adminRouter = Router();


adminRouter.get('/add-product', (req, res, next) => {
    console.log("Devolver formulario para meter productos");
    res.send('<FORM action="/admin/product" method="POST"><input type="text" name="producto"><button type="submit">Enviar</button></FORM>');
});

adminRouter.post('/product',(req, res, next) => {
    if(req.body.producto){
        console.log('Ha llegado el siguiente producto',req.body.producto)
    }
    res.redirect('/coche');
});