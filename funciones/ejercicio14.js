//Escriba una función que permita verificar los elementos repetidos en dos matrices del mismo tamaño y devuelva un vector con este conjunto
// de elementos. Si las matrices son de distinto tamaño debe mostrar un aviso indicando que no es posible ejecutar el programa.

let array1 = [1, 2, 3, 4, 5];
let array2 = [2, 4, 1, 3, 6];
let array3 = [];

if(array1.length === array2.length){
    function comparison() {
        for(let i=0; i<array1.length; i++){
            for(let j=0; j<array2.length; j++){
                if(array1[i] === array2[j]){
                    array3.push(array1[i]);
                }
            }
        }
        return array3;
    }
    console.log("The repeated elements are: "+comparison());
}else {
    console.log("Program can't be executed");
}