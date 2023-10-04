let matriz=[];
let promEstudiante=[];
let acumuladorEstudiante=0;
let promMateria=[];
let acumuladorMateria=0;
let aprobados=[];
let reprobados=[];
let contadorAprobados=0;
let contadorReprobados=0;
//codigo para rellenar matriz
for (i=0; i<24; i++){
    matriz[i]=[];
    for(j=0; j<6; j++){
        //rellena matriz de unos
        matriz[i][j]=parseFloat((Math.random()*5).toFixed(1));
    }
}

//codigo para calcular promedio de cada estudiante
for(let i=0; i<24; i++){
    for (let j=0; j<6; j++){
        acumuladorEstudiante+=matriz[i][j];
    }
    promEstudiante.push(acumuladorEstudiante/6);
    acumuladorEstudiante=0;
}

for(let j=0; j<6; j++){
    for(let i=0; i<24; i++){
        acumuladorMateria+=matriz[i][j];
        if (matriz[i][j]>=3){
            contadorAprobados++;
        }else{
            contadorReprobados++;
        }
    }
    aprobados.push(contadorAprobados);
    reprobados.push(contadorReprobados);
    promMateria.push(acumuladorMateria/24);
    acumuladorMateria=0;
    contadorAprobados=0;
    contadorReprobados=0;
}

console.log("aprobados son: "+aprobados);
console.log("reprobados son: "+reprobados);
console.log("el promedio por materia es: "+promMateria);
// console.log(promEstudiante);
// console.log(matriz)