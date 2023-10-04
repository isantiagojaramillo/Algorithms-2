

        let num, num2, mult;

        num = parseInt(prompt("ingrese numero"));

        if (num % 2 === 0){
            if (num >=0){
                alert("el numero es par y es positivo");
            }else{
                alert("el numero es impar y es negativo");
            }
        }else{
            num2 = parseInt(prompt("ingrese un numero nuevo"));
            mult=num*num2;
            alert("la multiplicacion de estos numeros es: "+mult);
        }