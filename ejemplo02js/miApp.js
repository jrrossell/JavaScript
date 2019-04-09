console.log("Hola junior")
var variablesGlobales = "variableGlobal";
var otraVariableGlobal = "otra variable global";

miFuncionConVar()
miFuncionConLet()

function miFuncionConVar() {
    var otraVariableDistinta = "variable local";
    for (var i = 0; i < 10; i++) {
        console.log("Mostrar el contenido de i: " + i);
    }
    console.log("El valor final de i: " + i);
}

function miFuncionConLet() {
    var otraVariableDistinta = "variable local";
    for (let i = 0; i < 10; i++) {
        console.log("Mostrar el contenido de i: " + i);
    }
    //console.log("El valor final de i: " + i);
}

console.log("Evaluando tipos de datos")
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "cadena de oro";
var fechaDeEstreno = new Date();
var otraFechaDeEstreno = fechaDeEstreno;
otraFechaDeEstreno.setFullYear(1999);

cambiaFecha(fechaDeEstreno)

console.log("fecha final " + fechaDeEstreno.getFullYear());
console.log("fecha final " + otraFechaDeEstreno.getFullYear());

function cambiaFecha(fecha) {
    fecha.setFullYear(1990);
    console.log("fecha definida " + fecha.getFullYear());
}

console.log("Resultado de typeof numerico: " + typeof tipoDeDatoNumerico);
console.log("Resultado de typeof cadena: " + typeof tipoDeDatoCadena);
console.log("Resultado de typeof fecha: " + typeof fechaDeEstreno);

pruebaNumerica()

function pruebaNumerica() {
    let numero = new Number(3.74121);
    console.log("Valor almacenado: " + numero.valueOf());
    console.log("Valor almacenado: " + numero.toFixed());
    console.log("Valor almacenado: " + numero.toFixed(4));
}

vamosALosMetodos(1, 2)
vamosALosMetodos(1)
vamosALosMetodos(1, 2, 3, 4, 5, 6, 7, 8, 9)
function vamosALosMetodos(campo1, campo2) {
    console.log("cantidad de args recibidos: " + arguments.length);
    console.log("argumentos esperados: " + arguments.callee.length);
}

misMierdasConArrays();
function misMierdasConArrays() {
    let mi_array = new Array();
    mi_array[0] = 7;
    mi_array[1] = "otra cosa";
    mi_array[mi_array.length - 1];

    let otro_array = [1, 2, "otro", new Date()];

    let mi_array_asociativo = new Array();
    mi_array_asociativo['unaClave'] = "Un valor";

    let persona = new Array();
    persona.nombre = "Junior";
    persona.apellido1 = "Rossell";
    persona.argumentos = vamosALosMetodos;
    persona.argumentos(1, 231, 123, 12, 3, 1);
    console.log("Datos personales: " + "Nombre: " + persona.nombre + " Primer Apellido: " + persona.apellido1);
}

console.log(hazAlgo("una mieeeerrdaaaaa"));
function hazAlgo(algo) {
    return "Esto es " + algo;
}

function MiClase(campo1, campo2){
    this.clave1 = campo1;
    this.clave2 = campo2;
    //this.concatena = function(){
    //    return this.clave1 + this.clave2;
    //}
}
MiClase.prototype.concatena = function(){
    return this.clave1 + this.clave2;
}

var miObjeto = new MiClase("primero ", "segundo");
console.log(miObjeto.concatena());

Array.prototype.dejaQueTeCuenteUnCuento = function(){
    console.log("Solo voy a instultaros un poquito..");
}

let miArrayChuli =[];
miArrayChuli.dejaQueTeCuenteUnCuento()

let tomaEstructura = [
    {
        uno:1,
        dos:2,
        tres:3
    },
    {
        cuatro: 4,
        cinco: 5,
        seis: 6
    }
]
console.log("Devuelveme del segundo el valor cinco : " + tomaEstructura[1].cinco)