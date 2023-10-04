//Realizar una función que reciba como parámetro un arreglo con las edades de un grupo de personas y retorne la cantidad de personas que
//son mayores de edad.

let ages = [15, 16, 18, 20, 10, 14, 25, 30];
let meterAdults=0;

function older(ages){
    for(let i=0; i<ages.lenght; i++){
        if(ages[i]>=18){
            meterAdults++;
        }
    }
    return meterAdults;
}
console.log("Total adults are: "+older(ages));