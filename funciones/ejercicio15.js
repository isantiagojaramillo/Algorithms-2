//En una tienda se desean vender cuadernos, el costo de un cuaderno para el vendedor es de 200 pesos. Escriba un programa que solicite al
//usuario el numero de cuadernos que va a adquirir, el precio al cual los va a vender y finalmente muestre la ganancia total en pantalla. 
//Utilice funciones. Ej: Si el usuario indica que vendió 10 cuadernos a 300 pesos, el programa debe decirle que la ganancia neta fue 
//de 1000 pesos.

let quantityNotebooks;
let costNotebook = 200;
let sellNotebook;
let earning;
let countEarning = 0;

function sale() {
    quantityNotebooks=parseFloat(prompt("Enter quantity of notebooks"));
    sellNotebook=parseFloat(prompt("Enter sale price by notebook"));

    for(let i=0; i<quantityNotebooks; i++){
        earning = sellNotebook - costNotebook;
        countEarning = countEarning + earning;
    }
    return countEarning;
}
console.log("Your earning is: $"+sale());