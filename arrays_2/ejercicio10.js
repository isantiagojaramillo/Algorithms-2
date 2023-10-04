let array=[];
let cantNumeros=10;
let numeros;

alert("Ingrese 10 numeros");
for(let i=0; i<cantNumeros; i++){
    numeros=parseFloat(prompt("Ingrese numeros"));
    array.push(numeros);
}
array.reverse()
console.log(array);
