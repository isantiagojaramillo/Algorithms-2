//FUNCION: Funciones son aquellos bloques de código los cuales van a realizar una determinada tarea
//PARAMETROS: Parametros son aquella información adicional, los cuales van a ser utilizados dentro de nuestras funciones

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Declarar una función con un nombre referente a la operacion(funcion que calcula el cuadrado de un numero)

// function square(number){
//     return number*number;
// }

// let resultado=square(5);
// console.log(resultado)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Escriba un programa que calcule el perimetro y area de un rectangulo. Utilice funciones. El retorno en vector [p, a]
// let base, altura;
// let vector = [];

// base=parseFloat(prompt("ingrese base del rectangulo"));
// altura=parseFloat(prompt("ingrese la altura del rectangulo"));

// function calcular(base, altura){
//     let perimetro= (base*2) + (altura*2)
//     let area= base*altura;
//     vector.push(perimetro, area);
//     return vector;
// }

// let resultado=calcular(base, altura);
// console.log(resultado);
// console.log(calcular(base, altura));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCION ANONIMA: ES UNA FUNCION QUE NO TIENE NOMBRE. CUAL ES SU SINTANXIS?
//AL TENERSE QUE DECLARAR ANTES
// let resultado=square(5);
// console.log(resultado);

// const square = function(number){
//     return number*number;
// }

//LAS DECLARACIONES NORMALES QUEDA DENTRO DEL CODIGO 
// let resultado=square(5);
// console.log(resultado)

// function square(number){
//     return number*number;
// }

//APLICAR UNA FUNCION A CUALQUIER ELEMENTO DEL VECTOR
// const square = function(x){
//     return x*x;
// }

// function apply_func_on_vector (vector, funcion){
//     let aux=[];
//     for(let i=0; i<vector.lenght; i++){
//         //AQUI ESTAMOS DICIENTO QUE META LA OPERACION DEL VECTOR FUNC EN EL VECTOR AUX
//         aux[i]=func(vector[i]);
//     }
//     return aux;
// }