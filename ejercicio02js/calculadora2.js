var variableGlobal = 0;
console.log("Calculadora Suma")
console.log("pulso 1 y sumo, es igual a = " + calculadoraSuma(1));
console.log("pulso 5 y sumo, es igual a = " + calculadoraSuma(5));

function calculadoraSuma(campo1){
    variableGlobal += campo1;
    return variableGlobal;
}

var variableGlobalResta = 0;
console.log("Calculadora Resta")
console.log("pulso 10 y resto, es igual a = " + calculadoraResta(10));
console.log("pulso 5 y resto, es igual a = " + calculadoraResta(5));
function calculadoraResta(campo1){
    if (variableGlobalResta == 0){
        variableGlobalResta = campo1;
    }else{
        variableGlobalResta -= campo1;
    }
    return variableGlobalResta;
}

var variableGlobalMulti = 0;
console.log("Calculadora Multiplica")
console.log("pulso 10 y multiplico, es igual a = " + calculadoraMulti(10));
console.log("pulso 5 y multiplico, es igual a = " + calculadoraMulti(5));
function calculadoraMulti(campo1){
    if (variableGlobalMulti == 0){
        variableGlobalMulti = campo1;
    }else{
        variableGlobalMulti *= campo1;
    }
    return variableGlobalMulti;
}

var variableGlobalDiv = 0;
console.log("Calculadora Dividir")
console.log("pulso 10 y divido, es igual a = " + calculadoraDiv(10));
console.log("pulso 5 y divido, es igual a = " + calculadoraDiv(5));
function calculadoraDiv(campo1){
    if (variableGlobalDiv == 0){
        variableGlobalDiv = campo1;
    }else{
        variableGlobalDiv /= campo1;
    }
    return variableGlobalDiv;
}