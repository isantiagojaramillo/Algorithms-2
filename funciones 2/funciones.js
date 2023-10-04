//Funcion:

//Bloque de construccion fundamental de JavaScript.
//Es un conjunto de instrucciones que realiza una tarea, para ser clasificado como
//funcion DEBE tomar alguna entrada y devolver una salida. Existe una relacion obvia
//entre entrada y salida.

//Las funciones constan de  varias partes importantes, vamos a estudiarlas:

//1. Declaracion de funcion: Debe colocarse la palabra reservada del sistema "function".

function saludo() {
    alert("Hola");
} 

//2. Las funciones contienen parametros, razon por la cual, dentro de los parentesis debe
//indicarse un par de variables que se van a modificar dependiendo de la entrada.
//Nota: Los nombres de estas variables son simbolicos, es decir, no deben coincidir con la 
//verdadera variable de entrada. Por ejemplo, hagamos que la funcion saludo() 
//nos diga por el nombre.

function saludo(nombre){
    console.log("Hola " + nombre);
}

//Para llamar la funcion, basta con utilizar el nombre que le dimos y los argumentos.

saludo("Jairo");

//3. Para considerarse una funcion como tal, debe existir una condicion de retorno, es 
//decir, debe devolverse un resultado de operaciones asociadas a la entrada.

//Para ello vamos a generar una funcion que permita sumar dos numeros:
//La funcion "suma" toma dos parametros (a,b) y consta de un retorno que devuelve la suma de estos.

function suma(a,b){
    return a+b;
}

console.log(suma(10,10));

//Funcion anonima: Simplemente, es una declaracion de funcion igualmente funcional
//pero no se le coloca un nombre especifico, mas bien se define una variable 
//que contiene a la funcion.

const resta = function(a,b) { return a-b }
let operacion = resta(2,1);
console.log(operacion);

//Sin embargo, utilizando este mismo principio, se puede utilizar dandole nombre a la funcion
// y posteriormente aprovechar las propiedades para utilizar una funcion dentro de otra.

//Calculemos un vector que sea el cuadrado del otro, utilizando funciones.

//1. Declaramos la funcion que le saca el cuadrado a un elemento:

const f = function cuadrado(numero){
    return numero*numero;
}

//2. Declaramos la funcion que aplica una funcion dada sobre cualquier elemento del vector.

function aplicar_arreglo(func, arreglo){
    let resultado = []; //crear un vector auxiliar local para almacenar el resultado de la operacion y retornarlo
    for(let i = 0; i < arreglo.length; i++){
        resultado[i] = func(arreglo[i]); //func representa la funcion que nosotros queramos aplicar sobre el vector
    }
    return resultado;
}

//3. Llamar la funcion con los parametros indicados, en este caso "f" sera la funcion que aplicaremos sobre el arreglo
// y "vector" sera el arreglo sobre el cual queremos verificar el resultado final.

let vector = [1,2,3,4,5];
let final = aplicar_arreglo(f, vector); //El resultado de la funcion aplicar_arreglo se almacena en la variable final
console.log(final);

//Funciones recursivas: Las funciones recursivas son funciones que se llaman a si mismas dentro de su ejecucion
//para generar un resultado (pueden verse como funciones que simulan un bucle).

//Por ejemplo una funcion para calcular un factorial:

function factorial(n){
    if ((n === 0 || n === 1)){
        return 1;
    } else {
        return (n*factorial(n-1)); //Esta linea de codigo calcula el factorial de cada numero desde el ingresado
                                    //hasta el ultimo.
    }
}

console.log(factorial(5));

//Funciones anidadas: Las funciones anidadas son el resultado de declarar una funcion dentro de otra.
//Nota: Solo se puede acceder a la funcion interna desde declaraciones en la funcion externa.
//Nota2: La funcion interna forma un 'cierre', es decir, la funcion interna puede usar los argumentos y variables
//de la funcion externa, pero la funcion externa no puede usar los argumentos y variables de la interna.

//Por ejemplo:

function fuera(x){
    function dentro(y){
        return x + y; //devuelve el valor x+y si se tienen los argumentos.
    }
    return dentro; //devuelve la funcion dentro, si se tienen los argumentos entonces ejecuta la funcion
}

resultado_dentro = fuera(3); //"Dame una funcion que agregue 3 a lo que sea que le des"
//console.log(resultado_dentro); //Esto mostrara en consola la funcion interna, ya que no tiene argumento 'y' aun
                                //por lo tanto, la funcion externa esta devolviendo a "dentro" que es una funcion.
resultado_final = resultado_dentro(5);
console.log(resultado_final); //imprime 8 el resultado final de la suma x = 3 + y = 5.

//Pero esto parece ser muy confuso, asi que si hay dos funciones anidadas todos los argumentos pueden darse de forma ordenada:

resultado_final_compacto = fuera(3)(5) //imprime 8, el argumento externo x es 3, el argumento interno y es 5.

console.log(resultado_final_compacto);

//El objeto arguments.

//Arguments es similar a un vector (pero no es un vector), se utiliza cuando no se sabe cuantos argumentos 
//se le van a introducir a la funcion, posee un indice y funciona de forma similar a los arreglos. Veamoslo
//con el siguiente ejemplo:

function concatenar(separador){
    let resultado = ''; //el resultado de concatenar elementos debe ser un string
    //Iterar sobre ARGUMENTS (ya que es parecido a un vector)
    //inicia desde 1, ya que el argumento 0 en una funcion que tiene 1 argumento, es ese argumento.
    for (let i = 1; i < arguments.length; i++){
        resultado += arguments[i] + separador;
    }
    return resultado;
}

console.log(concatenar(';', 'fresa', 'uva', 'mango')); //devuelve los elementos separados por el separador ;

//----------------Funcion Flecha (Funciones mas cortas)-------------------------//

//La funcion flecha tiene la siguiente sintaxis:

//let func = (arg1, arg2 ...,argN) => expresion_ejecucion; //este codigo no funciona, solamente indica la sintaxis.

//Lo anterior es la version corta de:
/*
let func = function(arg1, arg2 ..., argN) {
    return expresion_ejecucion;
}
*/
//Hagamos la funcion suma con forma de flecha:

let sum = (a,b) => a+b;

//Esta es la version corta del algoritmo del principio del documento llamado funcion suma.

console.log( sum(1,2) ); //Funciona exactamente igual que una funcion normal, es la version corta.

//Si solamente se cuenta con 1 argumento, puede hacerse aun mas corta la expresion:

//Funcion flecha que duplica el valor ingresado:

let double = n => n*2;

console.log( double(3) ); //deberia mostrar 6

//Las funciones flecha usualmente no utilizan return, pero en caso de ser necesario puede agregarse.