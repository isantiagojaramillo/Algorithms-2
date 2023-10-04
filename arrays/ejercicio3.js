let contadorPares= 0;
let contadorImpares= 0;
let N = parseFloat(prompt("ingrese la cantidad de elementos"))
let vector =[N];

for(i=0; i<N; i++){
    let num=parseFloat(prompt("ingrese numeros"))
    if(num % 2 === 0){
        contadorPares=contadorPares+1;
        document.write("el numero "+num+" es par <br>");
        
    }else{
        contadorImpares=contadorImpares+1;
        document.write("el numero "+num+" es impar <br>");
        
    }
}
document.write("el total de numeros pares es: "+contadorPares+"<br>");
document.write("el total de numeros impares es: "+contadorImpares+"<br>");
