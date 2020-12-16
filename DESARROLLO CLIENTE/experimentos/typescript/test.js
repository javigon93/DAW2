// let nombre: string = "Nerea"; //Declaramos la variable nombre y la inicializamos con el valor “Carlos”.
// // Creamos una función saludo con el parámetro nombre que devuelve un
// // “Hola” más el nombre.
// function saludo(nombre){ 
// return "Hola "+nombre; 
// }
// // Y finalmente la inyectamos en el elemento “encabezado” del html con el
// // método JavaScript.
// document.getElementById("encabezado").innerHTML = saludo(nombre); 
// function imprPantalla(a,b):string{
//     return a+b;
//     }
//     let a: number = 1;
//     let b: number = 5;
//     document.getElementById("encabezado").innerHTML = imprPantalla(a,b);
// var a = 10; 
// if (true){
// var a = 15 
// console.log("Dentro del if a tiene un valor de "+a);
// } else {
// //
// }
// console.log("Fuera del if a tiene un valor de "+a);
var Curso = /** @class */ (function () {
    function Curso(titulo, descripcion, horas) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.horas = horas;
        this.inscritos = 0; //en este caso se establecerán con el método
    }
    Curso.prototype.getInscritos = function () {
        return this.inscritos;
    };
    Curso.prototype.setInscritos = function (inscritos) {
        this.inscritos = inscritos;
    };
    Curso.prototype.addInscrito = function () {
        this.inscritos++;
    };
    Curso.prototype.remInscrito = function () {
        this.inscritos--;
    };
    return Curso;
}());
var cursoAngular = new Curso("Lol", "Libro de lol", 25);
console.log(cursoAngular);
