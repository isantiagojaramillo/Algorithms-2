// Realizar un programa que muestre en pantalla un saludo al nombre de dos personas, 
//introducido por teclado, usar funciones con dos parámetros.

let name1, name2;

name1=prompt("Enter first name");
name2=prompt("Enter second name");

function greet(name1, name2) {
    console.log("Hello! " +name1+ " and "+ name2);
}

greet(name1, name2);