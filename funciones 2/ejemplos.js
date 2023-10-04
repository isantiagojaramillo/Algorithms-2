/*7. Taller 2 funciones: Escriba una función que calcule la enésima potencia de cualquier número, 
otra que calcule la enésima raíz, el programa debe solicitar al 
usuario un numero de entrada e iterar hasta que el usuario decida parar la ejecución. 
El programa debe preguntarle en cada iteración si desea calcular una potencia o una raíz.*/

function potencia_raiz(base, exponente){
    //Si el exponente esta entre -1 y 1 es una raiz, de lo contrario es una potencia.
    return Math.pow(base, exponente);
}

let dato = parseFloat(prompt("Ingrese un dato"));
let bandera = true;

do{ 
    let confirmacion = prompt("potencia o raiz?");
    if (confirmacion === "potencia"){
        let exp = parseFloat(prompt("Ingrese el exponente"));
        if (exp <= -1 || exp >= 1 || exp === 0){
            dato = potencia_raiz(dato, exp);
            alert(dato);
        } else {
            alert("Operacion invalida");
            bandera = false;
        }
    } else if (confirmacion === "raiz"){
        let exp = parseFloat(prompt("Ingrese el exponente"));
        if (exp > -1 && exp < 1){
            dato = potencia_raiz(dato, exp);
            alert(dato);
        } else {
            alert("Operacion invalida");
            bandera = false;
        } 
    } else {
        alert("Operacion invalida")
        bandera = false;
    }
}while(bandera);