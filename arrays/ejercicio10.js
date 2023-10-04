let array = [];
let cantNumeros;
let numeros;
let numerosPrimos=0;
let contadorDivisores=0;

cantNumeros=parseInt(prompt("ingrese cantidad de numeros"));

for(let i=0; i<cantNumeros; i++){
    numeros=parseInt(prompt("ingrese numeros"))
    array.push(numeros);
}
console.log(array)

for(i=0; i<=array.length; i++){
    for(let j=1; j<=array[i]; j++){
        if(array[i] % j === 0){
            contadorDivisores++;
        }
    }
    if(contadorDivisores === 2){
        numerosPrimos++;
        console.log("ingreso "+numerosPrimos+" numeros primos "+array[i]);
    }
    contadorDivisores=0;
}


