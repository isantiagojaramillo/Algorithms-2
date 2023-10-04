let array = [];
let bandera = false;
let i=0;
let cantNombres=parseFloat(prompt("ingrese cantidad de nombres"));
do{
    let nombre=prompt("ingrese nombre");

    for(let name of array){

        if(name === nombre){
            alert("el nombre ya fue ingresado");
            bandera=true;
        }
    }
    if(bandera === false){
        array.push(nombre);
        console.log(array)
    }
    bandera = false;
    i++;
}while(i <= cantNombres);