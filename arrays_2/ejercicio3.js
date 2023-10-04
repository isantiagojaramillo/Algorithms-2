let array = [];
let numerosPares;
let cantNumeros;
let numeros;

cantNumeros=parseFloat(prompt("ingrese cantidad de numeros"));

for(let i=0; i<cantNumeros;i++){
    numeros=parseFloat(prompt("ingrese numero"));
    array.push(numeros);
    if(i %2 === 0 && array[i] % 2 === 0){
        console.log(array[i])
    }
}
console.log(array)
