function hola(nombre , unaFuncion){
    setTimeout(() => {
        return unaFuncion(nombre);
    })
}

hola('Priss' , (nombre) => {
    return console.log('Hola ' + nombre);
});