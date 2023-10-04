let num1, num2, num3;

num1=parseInt(prompt("Ingrese el primer numero"));
num2=parseInt(prompt("Ingrese el segundo numero"));
num3=parseInt(prompt("Ingrese el tercer numero"));

if (num1 > num2 && num1 > num3) {
    alert("El primer numero ( "+num1+") es mayor");
} else if(num2 > num1 && num2 > num3){
    alert("El segundo numero ( "+num2+") es mayor");
}else if(num3 > num1 && num3 > num2){
    alert("El tercer numero ( "+num3+") es mayor");
}else{
    alert("Son iguales");
}

if (num1 % 2 === 0) {
    alert("El primer ("+num1+") es par");
} else if(num2 % 2 === 0){
    alert("El segundo ("+num2+") es par");
}else if(num3 % 2 === 0){
    alert("El tercer ("+num3+") es par");
}
