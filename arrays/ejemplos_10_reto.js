//10. a) Un codigo que pida al usuario el numero de datos y los datos y llene un vector
//b) Leer el vector con los datos e identificar los numeros primos

//a)

let numero_datos = parseInt(prompt("Ingrese el numero de datos"));

let arreglo = [];
let contador_divisores = 0;
let contador_numeros_primos = 0;

for (let i = 0; i < numero_datos; i++){
    let elemento = parseInt(prompt("Ingrese un numero entero"));
    arreglo.push(elemento);
}

console.log(arreglo);

//b) 

//Numero primo: Divisible por 1 y divisible por si mismo.
//El ciclo externo recorre el arreglo
for (let i = 0; i < numero_datos; i++){
    //Este ciclo interno identifica los numeros primos
    for (let j = 1; j <= arreglo[i]; j++){
        if (arreglo[i]%j === 0){
            contador_divisores++;
        }
    }
    if (contador_divisores === 2 ){
        contador_numeros_primos++;
    }
    contador_divisores = 0;
}

console.log("Usted ingreso " + contador_numeros_primos + " numeros primos");

//Tarea: Imprima los numeros primos que el usuario ingreso en un vector llamado "primos"