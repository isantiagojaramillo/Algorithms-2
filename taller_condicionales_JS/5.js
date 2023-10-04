let num1, num2, num3;

num1=parseInt(prompt("ingrese numero 1"));
num2=parseInt(prompt("ingrese numero 2"));
num3=parseInt(prompt("ingrese numero 3"));

if (num1>num2 && num1>num3){
    alert("El primer numero ( "+num1+" ) es mayor");
}else if(num2>num1 && num2>num3){
    alert("El segundo numero ( "+num2+" ) es mayor");
}else if(num3>num1 && num3>num2){
    alert("El tercer numero ( "+num3+" ) es mayor");
}else{
    alert("Son iguales");
}

if(num1 % 2 === 0){
    alert("el primer numero "+num1+ " es par");
    if(num2 % 2 === 0){
        alert("el segundo numero "+num2+ " es par");
    }
    if (num3 % 2 === 0){
        alert("el tercer numero "+num3+ " es par");
    }
}