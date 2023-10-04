let array = [5,21,6,45,1,2,4];
let array2 = [];
let array3 = [];
let array4 = [];
let contadorPares=0;

for(i=0; i<array.length; i++){
    if(array[i] % 2 === 0){
    contadorPares++;
    array2.push(array[i]);

    }else{
        array3.push(array[i]);
    }
}

console.log("Hay "+contadorPares+" numeros pares");
array2.sort((a, b) => a-b);
array3.sort((a, b) => b-a)
array4=array2.concat(array3);
console.log(array4);
