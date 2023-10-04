//Realizar una función que reciba como parámetro el radio de un circulo y retorne el área.

let perimeter=31.416;
let radius;
let area;

radius=parseFloat(prompt("Enter circle's radius"));

function circle(area) {
    area=(perimeter*radius)/2;
    return area;
}
console.log("The circle's radius is: "+circle(area))