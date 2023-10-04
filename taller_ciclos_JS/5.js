let numero;

numero=parseFloat(prompt("ingrese un numero"));

for(let i=1; i<=numero; i++){
    if (numero % i === 0){
        console.log(i)
    }
}