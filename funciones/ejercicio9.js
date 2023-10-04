//Realizar una función que reciba como parámetro un arreglo con tres notas de un estudiante y retorne su promedio.

let array = [3,4,5];
let sum=0;

function average(array) {
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}

console.log("The array's average is: "+average(array));