//Realizar un programa que, pidiendo la introducción de un número, averigüe mediante una función, si dicho número que se le pase es positivo, 
//negativo o nulo. Para ello, deberá escribir en pantalla, en caso positivo, el mensaje “El número es positivo”. 
//En el caso de ser negativo escribirá “El número es negativo”. Si resulta ser nulo escribirá “El número es nulo”.

let num;

num=parseFloat(prompt("Enter any number"));

function verify(num) {
    if(num>0){
        console.log("The number is positive");
    }else if(num === 0 ){
        console.log("The number is null");
    }else{
        console.log("The number is negative")
    }
}
verify(num);