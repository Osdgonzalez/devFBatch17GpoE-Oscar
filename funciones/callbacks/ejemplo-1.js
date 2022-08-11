function ordenMayor(otraFuncion){
    return ordenMayor;
}

const calculadora = (a,b,operacion) => {
    return operacion(a,b);
}

const suma = (a,b) => {
    return a + b;
}

const resta = (a,b) => {
    return a - b;
}

const multiplicacion = (a,b) => {
    return a * b;
}

const division = (a,b) => {
    return a / b;
}

console.log(calculadora(15 , 5 , division));