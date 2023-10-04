let ims;

ims=parseInt(prompt("Ingrese su indice de masa corporal"));

if (ims < 18) {
    alert("Tiene bajo peso");
} else if(ims > 25){
    alert("Tiene sobrepeso");
}else{
    alert("Tiene peso normal");
}