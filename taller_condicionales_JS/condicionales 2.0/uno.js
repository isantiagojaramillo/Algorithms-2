let valorHora = 5000;
let totalPagar, cantHoras, minutos;

cantHoras = parseFloat(prompt("Ingrese cantidad de horas"));
minutos = parseFloat(prompt("Ingrese cantidad de minutos"));

if (minutos === 0) {
    totalPagar = cantHoras*valorHora;
    alert("Total a pagar "+ totalPagar);
}else{
    totalPagar = (cantHoras*valorHora)+5000;
    alert("Total a pagar "+totalPagar);
}