console.log("Mi calculadora");
console.log("Resultado de sumar 1+2+3+8 es: " + sumar(1,2,3,8));
console.log("Resultado de restar 15-7 es: " + restar(15,7));
console.log("Resultado de multiplicar 4*5 es: " + multiplicar(4,5));
console.log("Resultado de dividir 6/2 es: " + dividir(6,2));

function sumar(campo1, campo2){
    if (arguments.callee.length == arguments.length){
        return campo1 + campo2;
    }else if(arguments.callee.length < arguments.length){
        var resultado = sumar(arguments[0], arguments[1]);
        //var resultado = 0;
        for(let i = 2; i < arguments.length; i++){
            resultado = sumar(resultado, arguments[i]);
        }
        return resultado;
    }
}

function restar(campo1, campo2){
    if (arguments.callee.length == arguments.length){
        return campo1 - campo2;
    }
}

function multiplicar(campo1, campo2){
    if (arguments.callee.length == arguments.length){
        return campo1 * campo2;
    }
}

function dividir(campo1, campo2){
    if (arguments.callee.length == arguments.length){
        return campo1 / campo2;
    }
}