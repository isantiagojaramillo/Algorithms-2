// Escriba un programa que le permita determinar el sueldo de un trabajador bajo las siguientes características de su puesto laboral:
// El trabajador recibe un pago normal por sus 48 horas de trabajo, y un pago extra dependiendo de la cantidad de horas extra que realice a la 
// semana. Dicho lo anterior, cualquier hora que el trabajador haga, que exceda las 48 horas semanales, se cuenta como hora extra.
// Suponga que la hora trabajada (normal) se paga a 8.000 pesos, las horas extras se pagan al cuádruple de lo que se paga una hora trabajada 
// normal, pero a partir de las 7 horas extra, se pagan las primeras 7 al cuádruple y luego se comienzan a pagar al quíntuple.

let pago;
let valorHora=8000;
let cantHoraExtra;
let cuadruple=4;
let quintuple=5;
let totalHoraExtra;
let totalPago;

function sueldo() {
    pago=parseFloat(prompt("Ingrese sueldo"));
    cantHoraExtra=parseInt(prompt("Ingrese cantidad de horas extra trabajadas"));
    
    if(cantHoraExtra > 7){
        totalHoraExtra=cantHoraExtra*valorHora*quintuple;
        totalPago=totalHoraExtra+pago;
        return "El pago total es: ",totalPago;
    }else if(cantHoraExtra <= 7){
        totalHoraExtra=cantHoraExtra*valorHora*cuadruple;
        totalPago=totalHoraExtra+pago;
        return "El pago total es: ", totalPago;
    }else{
        return "No trabajo horas extra su pago es: ", pago; 
    }

}

console.log(sueldo());