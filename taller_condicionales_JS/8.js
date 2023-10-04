let kilosComprados;
let descuento, totalPagar;

kilosComprados=parseFloat(prompt("Ingrese kilos que compro"));

if (kilosComprados > 0 && kilosComprados <= 2){
    alert("Tiene 0% de descuento");
}else if(kilosComprados > 2 && kilosComprados <= 5){
    kilosComprados=kilosComprados * 10000;
    descuento=kilosComprados * 0.1;
    totalPagar=kilosComprados - descuento;
    alert("Tiene un descuento del 10%, por lo tanto paga "+totalPagar)
}else if(kilosComprados > 5 && kilosComprados <= 10){
    kilosComprados=kilosComprados * 10000;
    descuento=kilosComprados * 0.15;
    totalPagar=kilosComprados - descuento;
    alert("Tiene un descuento del 15%, por lo tanto paga "+totalPagar)
}else if(kilosComprados > 10){
    kilosComprados=kilosComprados * 10000;
    descuento=kilosComprados * 0.2;
    totalPagar=kilosComprados - descuento;
    alert("Tiene un descuento del 20%, por lo tanto paga "+totalPagar)
}else {
    alert("Cantidad no válida");
}