//Realizar un programa que una vez que solicita dos números por teclado, los pasa a una función donde se calcula la suma de éstos. 
//La función devolverá dicho resultado, pero en el caso de que salga negativo, deberá cambiarle el signo antes de devolverlo. 
//Imprimir el resultado en la función principal.

let num1, num2, suma;
let positive;

num1=parseFloat(prompt("Enter first number"));
num2=parseFloat(prompt("Enter second number"));

function addition(num1, num2) {
    suma=num1+num2;
    return suma;
}

function consversion() {
    if(suma<0){
        positive=suma*(-1);
        return positive;
    }else{
        return suma;
    }
}
console.log(addition(num1, num2));
console.log(consversion());
