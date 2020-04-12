const [, , numero] = process.argv;

const factorial = num => {
    if (num === 0){
        return 1;
    }
    else if (num === 1){
        return 1;
    }
    else{
    return resultado = (num * factorial(num-1));
    }
}

var final = factorial (Number(numero));
console.log(final);
console.log('Hola otra vez cuarto cambio');





