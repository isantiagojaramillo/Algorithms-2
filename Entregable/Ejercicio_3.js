let num1, num2, num3;

num1=parseFloat(prompt("Ingrese numero 1"));
num2=parseFloat(prompt("Ingrese numero 2"));
num3=parseFloat(prompt("Ingrese numero 3"));

if(num1>num2 && num1>num3){
    alert("el numero 1( "+num1+" )es mayor");
}else if(num2>num1 && num2>num3){
    alert("el numero 2( "+num2+" )es mayor");
}else if(num3>num1 && num3>num2){
    alert("el numero 3( "+num3+" )es mayor");
}else{
    alert("Los numeros son iguales");
}

if(num1 % 2 === 0){
    alert("el numero 1( "+num1+" )es par");
}if(num2 % 2 === 0){
    alert("el numero 2( "+num2+" )es par");
}if(num3 % 2 === 0){
    alert("el numero 3( "+num3+" )es par");
}