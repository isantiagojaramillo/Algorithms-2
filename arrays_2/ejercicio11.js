let vector = [1,2,3,4,5];
let factorial=1;

for(let i=0; i<vector.length;i++){
    
    for(let j=1; j<=vector[i]; j++){
        factorial=j*factorial;
    }
    console.log("el factorial de "+vector[i]+" es "+factorial);
    factorial=1;
}


// 5= 5x4x3x2x1=120