let perimetro, area;
let menu, opcion;

menu="menu \n\n";
menu+="1. Rectángulo \n\n";
menu+="2. Cuadrado \n\n";
menu+="3. Círculo \n\n";
menu+="Ingrese una de las opciones \n\n";

opcion=parseFloat(prompt(menu));

if (opcion === 1){
    let b=parseInt(prompt("Ingrese base del rectángulo"));
    let h=parseInt(prompt("Ingrese altura del rectángulo"));
    area=b*h;
    perimetro=2*(b+h);
    alert("El área del rectángulo es igual a: "+area+" y su perimetro es: "+perimetro);
}else if(opcion === 2){
    let lado1=parseInt(prompt("Ingrese la medida del lado 1"));
    let lado2=parseInt(prompt("Ingrese la medida del lado 2"));
    let lado3=parseInt(prompt("Ingrese la medida del lado 3"));
    let lado4=parseInt(prompt("Ingrese la medida del lado 4"));
    perimetro=lado1+lado2+lado3+lado4;
    area=lado1*lado2;
    alert("El perimetro del cuadrado es: "+perimetro+" y su area es: "+area);
}else if(opcion === 3){
    let radio=parseInt(prompt("ingrese el radio del circulo"));
    perimetro=2*3.1416*radio;
    area=(perimetro*radio)/2;
    alert("El perímetro del círculo es: "+perimetro+" y su área es: "+area)
}else{
    alert("La opción ingresada no existe");
}
