let array=[];
let numerosPares;
let cantNumeros;
let numeros;

cantNumeros=parseFloat(prompt("ingrese cantidad de numeros"));

for(i=0; i<cantNumeros; i++){
    numeros=parseFloat(prompt("ingrese numeros"));
    array.push(numeros)

    if(array[i] % i === 0){
        console.log(array[i]+" ES multiplo de "+i)
    }
}
console.log(array)