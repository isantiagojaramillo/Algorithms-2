let valorCompra, totalCompra, descuento;
let profesion, menu;

menu+=" Estudiante \n\n ";
menu+=" Profesor \n\n ";
menu+=" Directivo \n\n ";
menu+=" Ingrese profesion \n\n ";

profesion=prompt(menu);
valorCompra=parseInt(prompt("Ingrese el valor de la compra"));

if(profesion === "Estudiante"){
    descuento=valorCompra*0.1;
    totalCompra=valorCompra-descuento;
    alert("Tiene un descuento del 10% por lo tanto su valor a pagar es: "+totalCompra);
}else if(profesion === "Profesor"){
    descuento=valorCompra*0.2;
    totalCompra=valorCompra-descuento;
    alert("Tiene un descuento del 20% por lo tanto su valor a pagar es: "+totalCompra);
}else if(profesion === "Directivo"){
    descuento=valorCompra*0.15;
    totalCompra=valorCompra-descuento;
    alert("Tiene un descuento del 15% por lo tanto su valor a pagar es: "+totalCompra);
}else{
    alert("Este cargo no recibe descuento por lo tanto usted paga: "+valorCompra)
}