let N = parseFloat(prompt("ingrese la cantidad de elementos"))
let vector =[N];

for(i=0; i<vector; i++){
    let num=parseFloat(prompt("ingrese numeros"))
    if(num % 2 === 0){
        document.write("el numero "+num+" es par <br>");
    }
}