let matriz = [[1,2,0],
              [3,1,4],
              [3,0,1]];

//Primaria

// for(i=0; i<matriz.length; i++){

// for(j=0; j<matriz[i].length; j++){
//     if(i===j){
//         console.log(matriz[i][j])
//     }
// }
// }

//Secundaria

for(i=0; i<matriz.length; i++){

for(j=0; j<matriz[i].length; j++){
    if(i + j === matriz.length -1){
        console.log(matriz[i][j])
    }
}
}
