let nota1, nota2, nota3, promedio

nota1 = parseInt(prompt("Ingrese la nota 1"));
nota2 = parseInt(prompt("Ingrese la nota 2"));
nota3 = parseInt(prompt("Ingrese la nota 3"));

promedio=(nota1+nota2+nota3)/3;

if (promedio >= 3) {
    alert("Aprobado")
} else {
    alert("No Aprobado")
}
