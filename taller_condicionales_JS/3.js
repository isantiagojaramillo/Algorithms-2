let nota1, nota2, nota3, notaFinal;

nota1=parseInt(prompt("por favor ingrese nota 1"));
nota2=parseInt(prompt("por favor ingrese nota 2"));
nota3=parseInt(prompt("por favor ingrese nota 3"));

notaFinal=(nota1+nota2+nota3)/3;

if(notaFinal>=3){
    alert("Aprobado");
}else{
    alert("No aprobado");
}