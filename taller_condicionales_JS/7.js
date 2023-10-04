let menu, opcion;

menu+="menu \n\n";
menu+="1. Lunes \n\n";
menu+="2. Martes \n\n";
menu+="3. Miércoles \n\n";
menu+="4. Jueves \n\n";
menu+="5. Viernes \n\n";
menu+="6. Sábado \n\n";
menu+="7. Domingo \n\n";
menu+="Seleccione un numero\n\n";

opcion=parseInt(prompt(menu));

if (opcion === 1){
    alert("Lunes");
}else if(opcion === 2){
    alert("Martes");
}else if(opcion === 3){
    alert("Miércoles");
}else if(opcion === 4){
    alert("Jueves");
}else if (opcion === 5){
    alert("Viernes");
}else if(opcion === 6){
    alert("Sábado");
}else if(opcion === 7){
    alert("Domingo");
}else{
    alert("Error, número no válido");
}