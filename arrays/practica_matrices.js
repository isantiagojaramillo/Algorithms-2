//ESCRIBA UN CODIGO QUE MUESTRE LOS ELEMENTOS DIVISIBLES POR 3 DE LA MATRIZ DADA Y SU POSICION EN LA MATRIZ

let matriz = [[1,2,3], 
             [4,5,6], 
             [7,8,9]];

// for(i=0; i<3; i++){

//     for(j=0; j<3; j++){
//         if(matriz[i][j] % 3 === 0){
//             console.log("el numero "+matriz[i][j]+" es divisible por 3 y esta en la posicion "+i+""+j);
//         }
//     }
// }

for(i=0; i<matriz.length; i++){

    for(j=0; j<matriz[i].length; j++){
        if(i!=j){
            console.log(matriz[i][j])
        }
    }
}