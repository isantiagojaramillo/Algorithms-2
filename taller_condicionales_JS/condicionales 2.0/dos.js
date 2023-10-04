let num, num2, mult;

num=parseFloat(prompt("Ingrese un número"));

if (num === 0) {
    alert("El numero es "+num);
} else {
    if (num % 2 === 0 && num > 0) {
        alert("El numero es par positivo");
    } else {
        if (num % 2 === 0 && num < 0) {
            alert("El numero es par negativo");
        }else{
            if (num % 2 != 0 && num > 0 || num < 0) {
                num2 = parseFloat(prompt("El numero es impar, por favor ingrese otro numero"));
                mult = num*num2;
                alert("La multiplicacion de estos es: "+mult);
            } 
        }
    }
}