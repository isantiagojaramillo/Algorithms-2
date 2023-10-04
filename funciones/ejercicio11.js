//Escriba un programa que solicite al usuario un vector numérico y devuelva otro vector con todos los elementos multiplicados 
//por el numero que el usuario indique. Utilice funciones. Ej: Si el usuario ingresa [1,2,3] e ingresa el numero 10, 
//el programa debe devolverle [10,20,30] como resultado.

let array = [];
let array2 = [];
let cantNumbers;
let numbers;
let multNumber;

cantNumbers=parseFloat(prompt("Enter quantity of numbers"));
    for(let i=0; i<cantNumbers; i++){
        numbers=parseFloat(prompt("Enter number"));
        array.push(numbers);
    }
    console.log(array);

function multiply() {
    multNumber=parseFloat(prompt("enter the number with which you want to multiply the numbers of the array"));
    for(let j=0;j<array.length;j++){
        let mult = array[j]*multNumber;
        array2.push(mult);
    }
    return array2;
}
console.log(multiply());
