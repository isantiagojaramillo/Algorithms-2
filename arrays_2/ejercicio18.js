/**
 * Neiver Tapia Escobar
 */

//Ejercicio 18. 
//Cree un algoritmo que lea dos parámetros, correspondientes a dos
// matrices. La función debe efectuar la suma de dichas matrices e imprimir la
// matriz resultante. En caso de que las matrices no puedan ser sumadas, el
// mensaje de error que se debe mostrar es "No se pueden sumar estas matrices"

matrizA=[];
matrizB=[];
matrizResul=[];
let datosA;
let datosB;

let columnaMatA=parseInt(prompt('Por favor indique el nro de columnas de la matriz 1'));
let filaMatA=parseInt(prompt('Por favor indique el nro de filas de la matriz 1'));

let columnaMatB=parseInt(prompt('Por favor indique el nro de columnas de la matriz 2'));
let filaMatB=parseInt(prompt('Por favor indique el nro de filas de la matriz 2'));

if (columnaMatA===columnaMatB && filaMatA===filaMatB) {

    for (let i = 0; i < filaMatA; i++) {
        matrizA[i]=[];
        for (let j = 0; j < columnaMatA; j++) {
            datosA=parseInt(prompt('Por favor ingrese los datos de la matriz 1 fila '+i+' columna '+j));
            matrizA[i][j]=datosA;
        }
    }
    console.log('La matriz A es: ');
    console.log(matrizA);
    
    for (let i = 0; i < filaMatB; i++) {
        matrizB[i]=[];
        for (let j = 0; j < columnaMatB; j++) {       
            datosB=parseInt(prompt('Por favor ingrese los datos de la matriz 2 fila '+i+' columna '+j));
            matrizB[i][j]=datosB;
        }
    }
    console.log('La matriz B es: ');
    console.log(matrizB);

    for (let i = 0; i < matrizA.length; i++) {
        matrizResul[i]=[];
        for (let j = 0; j < matrizA[i].length; j++) {
            matrizResul[i][j] = matrizA[i][j]+matrizB[i][j];
        }
    }
    console.log('La matriz resultante es: ');
    console.log(matrizResul);
    
}else{
    console.log('No se pueden sumar estas matrices');
}