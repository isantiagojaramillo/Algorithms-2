let array=[];
let reverse;
let cantNumeros;
let numeros;

cantNumeros=parseFloat(prompt("ingrese cantidad de numeros"));

for(let i=0; i<cantNumeros;i++){
    numeros=parseFloat(prompt("ingrese numero"));
    array.push(numeros);
}
console.log(array);
reverse=array.reverse();
console.log(reverse);