let matriz=[[1,2,0],
            [3,1,4],
            [3,0,1]]

for(let i=0; i<matriz.length;i++){
    for(let j=0;j<matriz[i].length;j++){
        if(i===j){
            console.log(matriz[i][j]);
        }
    }
}