import express from "express";

console.log('----------------------------------------------------------------------');
console.log("Bienvenido a mi app");

const port = 3000;

const app = express();
//Controladores para responder a las peticiones por HTTP
app.get('/automovil', (req, res, next) => {
    console.log("Pasamos por el primer middleware app.get");
    res.redirect("/coche")
});

app.use('/coche', (req, res, next) => {
    console.log("Ha llegado una petición");
    next();
});

app.use('/coche', (req, res, next) => {
    console.log("Estamos en el segundo middleware");
    res.send({ "message": "ok" });
});

app.use('/', (req, res, next) => {
    console.log("Middleware del final");
    res.status(404).send({'error': 'mal hecho'});
});

//Fin

app.listen(port);
console.log("Servidor de la app en marcha");

/*
//Ejemplos
let a: Number | string = 5;
a = "Holis";

enum Talla {XXS, XS, S, M, L, XL, XXL, XXXL};
const person: personas = { 
    name: 'Madaleno',
    age: 200,
    hobbies: ['musica', 'deporte'],
    role: [2, 'autor'],
    medida: Talla.XL
}

type personas = {
    name: string,
    age: number,
    hobbies: string[]
    role: (Number | string)[],
    medida: Talla
} 
const person2: personas = { 
    name: 'Bollito',
    age: 6,
    hobbies: ['comida', 'ventanas'],
    role: [2, 'micho'],
    medida: Talla.XS
}
*/
