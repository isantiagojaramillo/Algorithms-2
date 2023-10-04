let array = [];
let cantDatos;
let numeros;

cantDatos=parseFloat(prompt("ingrese cantidad de datos en el array"));

for(let i=0; i<cantDatos; i++){
    numeros=parseFloat(prompt("ingrese numero"));
    array.push(numeros);
}
array.sort()
console.log(array);
array.reverse();
console.log(array);
