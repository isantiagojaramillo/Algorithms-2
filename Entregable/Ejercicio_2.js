let cantDinero, tasaInteres;

cantDinero=parseFloat(prompt("Ingrese cantidad de dinero a depositar"));

if (cantDinero > 10000000){
    tasaInteres=cantDinero*0.1;
    console.log("su tasa de interes anual es de 10%: "+tasaInteres);
}else if(cantDinero >= 5000000 && cantDinero <= 10000000){
    tasaInteres=cantDinero*0.08;
    console.log("su tasa de interes anual es de 8%: "+tasaInteres);
}else if(cantDinero >= 2000000 && cantDinero < 5000000){
    tasaInteres=cantDinero*0.05;
    console.log("su tasa de interes anual es de 5%: "+tasaInteres);
}else{
    console.log("No recibe ninguna tasa de interes");
}