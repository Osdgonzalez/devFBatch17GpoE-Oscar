let i = 0;

const contador = setInterval(() => {
    if(i < 5){
        return console.log(i++);
    }

    return clearInterval(contador);
    
}, 1000);