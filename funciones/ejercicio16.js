//Escriba un programa que reordene vectores de 9 elementos en matrices de 3x3 según el orden de sus índices. Posteriormente calcule el 
//promedio de los elementos de la matriz y finalmente cuente cuantos números pares e impares tenia, retorne este dato como un vector de 2 
//posiciones ([#pares, #impares]). Utilice una función para convertir el vector a una matriz, otra función para calcular el promedio y una 
//última para ver la cantidad de números pares e impares.

let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];
let matrix = [];

let sum=0;
let prom;

let arrayEven = [];
let arrayOdd = [];
let arrayEvenOdd=[];

function organizedMatrix() {
    matrix = [array1, array2, array3];
    return matrix;
}

function average() {
    for(let i=0; i<matrix.length;i++){
        for(let j=0; j<matrix.length;j++){
            sum += matrix[i][j];
        }
    }
    return sum/9;
}

function even_odd() {
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix.length; j++){
            if(matrix[i][j] % 2 === 0){
                arrayEven.push(matrix[i][j]);
            }else{
                arrayOdd.push(matrix[i][j]);
            }
            arrayEvenOdd=arrayEven.concat(arrayOdd);
        }
    }
    return arrayEvenOdd;
}
console.log(organizedMatrix());
console.log(average());
console.log(even_odd());



