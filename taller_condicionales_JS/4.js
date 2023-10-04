let ims;

ims=parseInt(prompt("ingrese indice de masa corporal"));

if (ims < 18){
    alert("tiene bajo peso");
}else if(ims > 25){
    alert("Tiene sobrepeso");
}else {
    alert("Tiene peso normal");
}