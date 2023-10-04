let suma=0;
let prom=0;
let matriz=[[2000, 2000, 5000, 7000, 5000, 2000, 1000],
            [3000, 4000, 500,   999,   1000, 5500, 3000],
            [9650, 5200, 2100, 3200, 5200, 3050, 2200],
            [8200, 200,   5000, 3000, 5000, 6000, 3200]];

for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz.length; j++){
        suma=matriz[i][j]+suma;
    }
}
prom=suma/28;
console.log(prom);

if (prom>10000){
    console.log(matriz[0])
}else if(prom<10000){
    console.log(matriz[3]);
}
