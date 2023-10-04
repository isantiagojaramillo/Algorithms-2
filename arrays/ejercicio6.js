let array = [];
let cantNumeros;
let numero;
let string_array;

cantNumeros=parseInt(prompt("ingrese cantidad de numeros"));

for(let i=0; i<cantNumeros; i++){
    numero=parseInt(prompt("ingrese numero"));
    array.push(numero); 
    string_array = array.join( " - " ); 
}
console.log(string_array)


