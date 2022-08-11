function hola(nombre , unaFuncion){
    setTimeout(() => {
        return unaFuncion(nombre);
    }, 1500)
}

function hablar(mensaje , unaFuncion){
    setTimeout(() => {
        return unaFuncion(mensaje);
    }, 1100)
}