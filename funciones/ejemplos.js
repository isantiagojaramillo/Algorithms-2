//13.
//Funcion para crear cualquier matriz de n x m con numeros aleatorios.
function rellenar_matriz(filas,columnas){
    let matriz = [];
    for (let i = 0; i < filas; i++){
        matriz[i] = [];
        for (let j = 0; j < columnas; j++){
            //rellenarla con numeros aleatorios entre 0-1
            matriz[i][j] = parseFloat(Math.random().toFixed(2));
        }
    }
    return matriz;
}

//Extraer diagonal principal
function diag_principal(matriz){
    let resultado = [];
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (i === j) {
                resultado.push(matriz[i][j]);
            }
        }
    }
    return resultado;
}

//Extraer diagonal secundaria
function diag_secundaria(matriz){
    let resultado = [];
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (i+j === matriz.length-1) {
                resultado.push(matriz[i][j]);
            }
        }
    }
    return resultado;
}

//Funcion que calcula el promedio de cualquier vector
function promedio_vector(vector){
    let acumulador = 0;
    for (let i = 0; i < vector.length; i++){
        acumulador += vector[i];
    }
    let promedio = (acumulador)/(vector.length)
    return promedio;
}

//Codigo (llamando las funciones del bloque de funciones)
let matrix = rellenar_matriz(3,3);
let diagonal_principal = diag_principal(matrix);
let diagonal_secundaria = diag_secundaria(matrix);
let promedio_diagonal_principal = promedio_vector(diagonal_principal);
let promedio_diagonal_secundaria = promedio_vector(diagonal_secundaria);

//Bloque de impresion de datos
console.log(matrix);
console.log("La diagonal principal es: " + diagonal_principal);
console.log("La diagonal secundaria es: " + diagonal_secundaria);
console.log("El promedio de la diag principal es: " + promedio_diagonal_principal);
console.log("El promedio de la diagonal secundaria es: " + promedio_diagonal_secundaria);