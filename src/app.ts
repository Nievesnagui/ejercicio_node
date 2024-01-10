console.log('----------------------------------------------------------------------');

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

