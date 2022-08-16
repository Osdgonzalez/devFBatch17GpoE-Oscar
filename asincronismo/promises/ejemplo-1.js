"use strict"// Activar modo estricto de Js

// nombre = "juan";

// console.log(nombre);

let x = 10;

const promesaEjemplo = new Promise((resolve , reject) => {
    if(x === 10){
        return resolve('Promesa cumplida');
    }
    return reject('Promesa fallida');
})

promesaEjemplo
.then((response) => {
    console.log(response);
    return 'Otra respuesta';
})
.then((respuesta) => {
    console.log('el siguiente valor viene del primer then: ' + respuesta);
})
.then(() => {
    console.log('then de prueba');
})
.catch((error) => {
    console.log(error);
});