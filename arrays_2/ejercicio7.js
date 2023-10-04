let vector = [1,2,3,4,
              5,6,7,8,
              9,10,11,12,
              13,14,15,16];

let matriz = [];
let contador = 0;

for (let i=0; i < 4; i++){
    matriz[i] = [];

    for(let j=0; j < 4; j++){
        matriz[i][j] = vector[contador];
        contador++;
    }
}
console.log(matriz);