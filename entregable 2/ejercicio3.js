// Un Zoólogo pretende determinar el porcentaje de animales que hay en las siguientes categorías:
// 0 a 5 años, mas de 5 años y menos de 7 y aquellos que tienen más de 7 años.
// El Zoólogo aun no esta seguro de que animal se va a estudiar, si se decide por rinocerontes tomara una muestra de 20 de ellos, si se decide
// por monos tomara una muestra de 40 individuos y, finalmente, si se decide por elefantes, tomara una muestra de 75 de ellos.
// Escriba un programa que le solicite al Zoólogo el animal que desea estudiar, le entregue la muestra dependiendo de que animal escogió y
// le indique el porcentaje de animales en cada categoría. Recuerde que la suma de los porcentajes debe ser 100%.

let menu, opcion;
let contador1=0;
let contador2=0;
let contador3=0;
let cant;
let edad;

menu+="menú";
menu+="1. Rinocerontes";
menu+="2. Monos";
menu+="3. Elefantes";

opcion=parseInt(prompt(menu));

switch (opcion) {
    case 1:
        cant=20
        for(let i=0; i<cant; i++){
            edad=parseInt(prompt("Ingrese la edad"));
            if(edad > 0 && edad <5){
                contador1++;
            }
        }
        console.log("porcentaje de "+opcion);
        console.log(contador1/cant)*100;
        break;

    case 2:
        cant=40;
        for(let i=0; i<cant; i++){
            edad=parseInt(prompt("Ingrese la edad"));
            if(edad > 5 && edad <7){
                contador2++;
            }
        }
        console.log("porcentaje de "+opcion);
        console.log(contador2/cant)*100;
        break;
 
    case 3:
        cant=75;
        for(let i=0; i<cant; i++){
            edad=parseInt(prompt("Ingrese la edad"));
            if(edad > 7){
                contador3++;
            }
        }
        console.log("porcentaje de "+opcion);
        console.log(contador3/cant)*100;
        break;

    default: console.log("La opción no existe");
        break;
}