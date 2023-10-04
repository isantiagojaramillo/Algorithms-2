//Variable Contadora: Variable que se utiliza para contabilizar
//o contar la cantidad de veces que ocurre un evento.

//Ejemplo: Escriba un codigo que le permita contar cuantos numeros
//pares hay entre 0 y 5, contando el cero.

/*
let contador = 0;

for (let i = 0; i <= 5; i++) {
    if (i % 2 === 0) {
        contador++;
    }
}

alert("Hay " + contador + " numeros pares entre 0 y 5 contando el cero");
*/

//Variable Acumuladora: Variable que se utiliza para almacenar operaciones
//intermedias para llegar a un resultado final.

//Ejercicio: Escriba un codigo que le permita sumar los numeros del 0
// al 5. Pista: 1 + 2 + 3 + 4 + 5 = 15

//Regla de la variable acumuladora:
//Si la operacion que estoy acumulando es una SUMA o RESTA, acumulador debe inicializar en 0.
//Si la operacion es MULTIPLICACION o DIVISION, acumulador debe inicializar en 1.

/*
let acumulador = 0;

for (let i = 0; i <= 5; i++) {
    acumulador+=i;
    console.log("El valor de i es: " + i);
    console.log("El valor de acumulador es: " + acumulador);
}
alert(acumulador);
*/

//Variable Indicadora: Bandera. Es una variable que adquiere el valor
//booleano true cuando ocurre un evento.
//Siempre se inicializan en false

/*
let indicadora = false;

for (let i = 0; i<=5; i++){
    if (i % 2 === 0) {
        indicadora = true;
    }
    if (indicadora === true) {
        alert("Hola, bandera true " + i);
        indicadora = false;
    }
}
*/


//Break: Rompe el ciclo y lo termina apenas es leida esta instruccion.
//Continue: Rompe la ejecucion actual pero en vez de romper el ciclo, 
//realiza la siguiente iteracion del ciclo.

/*
for (let i = 0; i<=5; i++){
    console.log(i);
    if (i % 2 === 0){
        break;
    }
    alert("Hola");
}
*/

/*
for (let i = 0; i<=5; i++){
    alert("El valor i es: " + i);
    continue;
    alert("Hola");
}
*/

//Escriba un codigo que le permita sumar los primeros 100 numeros. El resultado
//debe dar 5050.

/*
let acumulador = 0;

for (let i = 1; i <= 100; i++) {
    acumulador = acumulador + i;
}

console.log(acumulador);
*/