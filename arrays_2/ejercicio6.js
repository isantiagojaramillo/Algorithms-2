let vector = [1,2,3,4,5,6,7,8];
let vector2 = ["A","B","C","D","E","F","G","H"];
let vector1=0;
let vec2=0;

let matriz= []
for(let i=0; i<4; i++){
//crear fila
    matriz[i]=[];
    for(let j=0; j<4;j++){
        //llenando la matriz en posiciones pares
        if(j % 2 === 0){
            matriz[i][j]=vector2[vec2];
            vec2++;
        }
// llenando la matriz en posiciones impares
        if(j % 2 != 0){
            matriz[i][j]=vector[vector1];
            vector1++;
        }
    }
}
console.log(matriz);

// 0,0=vector2 
// 0,1=vector
// 0,2=vector2
// 0.3=vector
// 1,0=vector2
// 1,1=vector
// 1,2=vector2
