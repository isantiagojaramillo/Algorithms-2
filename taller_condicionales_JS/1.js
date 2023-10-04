let valorHora= 5000
let totalPagarcantHoras, minutos;

cantHoras = parseFloat(prompt("ingrese cantidad de horas en el estacionamiento"));
minutos = parseFloat(prompt("ingrese cantidad de minutos en el estacionamiento"));

if (minutos === 0){
    totalPagar=cantHoras*valorHora;
    alert("total a pagar es: "+totalPagar)
}else{
    totalPagar=(cantHoras*valorHora)+5000;
    alert("total a pagar es: "+totalPagar);
}