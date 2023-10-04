//CREAR UN ARRAY

// let elementos = ["Colegio", 20, true, "Estudio"];
// let nuevo = [1,2,3,4,5,6,7,8,9,10];

// console.log(nuevo);
// console.log(elementos);

/////////////////////////////////////

// let x = "hola";

// let vec =[1,2,3,x];

// console.log(vec)

////////////////////////////////////

//SABER CUANTOS ELEMENTOS TIENE UN ARRAY
// let elementos = [0,1,2,3,4,5,6];

// console.log(elementos.length)

////////////////////////////////////////////////

//ACCEDER A UN ELEMENTO DEL ARRAY POR MEDIO DEL INDICE
// let ficha = ["mateo", "maria", "santiago", "luisa", "neyder", "jairo"];
//EJERCICIOS

//ACCEDA AL PRIMER ELEMENTO DEL ARRAY
// let elemento = ficha[0]
// console.log(elemento)

//ACCEDA AL ULTIMO ELEMENTO DEL ARRAY
// let tamano = ficha.length;
// let ultimo = ficha[tamano - 1];
// console.log(ultimo);

/////////////////////////////////////////////

//MODIFICAR CUALQUIER ELEMENTO DEL ARRAY

// let ficha = ["mateo", "maria", "santiago", "luisa", "neyder", "jairo"];

// ficha[1]="jairo";
// console.log(ficha)

/////////////////////////////////////////////////////////////////////////////////

//AGREGAR ELEMENTOS AL ARRAY

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// ficha[7]="carmen";
// console.log(ficha[5]);

///////////////////////////////////////////////////////////////////

//AGREGAR ELEMENTOS AL ARRAY

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// ficha.push("jairo", "melissa", "neiver");
// console.log(ficha);

///////////////////////////////////////////////////////

//QUITAR EL ULTIMO ELEMENTO

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// let elemento = ficha.pop();
// console.log(elemento);

////////////////////////////////////////////////////////////

//CONCATENAR ARRAYS

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// let nuevo = ["jairo", "neiver", "esteban"];

// let concatenar = ficha.concat(nuevo);

// console.log(concatenar);

//////////////////////////////////////////////////////////

//IMPRIMIR CON SEPARADORES

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// let guiones = ficha.join(" - ");

// console.log(guiones);

////////////////////////////////////////////////////////////////

//ORDENAR ALFABETICAMENTE EL ARRAY

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// ficha.sort();

// console.log(ficha);


/////////////////////////////////////////////////////////////////

// ORGANIZAR DE ATRAS PARA ADELANTE

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// ficha.reverse();

// console.log(ficha);

//////////////////////////////////////////////////////////////////

//RECORRER LOS ELEMENTOS DE UN ARRAY CON EL ID

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// for(i=0; i<ficha.length; i++){
//     console.log(ficha[i]);
// }

//FORMA QUE NO CONSIDERA EL INDICE O ID

// let ficha = ["mateo", "maria", "santiago", "luisa"];

// for(let nombres of ficha){
//     console.log(nombres);
// }

/////////////////////////////////////////////////////////////

//1)UPONGA QUE TIENE EL SIGUIENTE ARRAY a=[1,2,3,4,5,6,7,8,9,10] ESCRIBA UN CODIGO QUE IMPRIMA UNICAMENTE
//LOS NUMEROS DIVISIBLES POR 3 QUE SE ENCUENTRAN EN EL ARRAY

// let a=[1,2,3,4,5,6,7,8,9,10];

// for (let i=0; i<a.lenght; i++){ 
//     if(a[i] % 3 === 0){
//         console.log(a[i]);
//     }
// }

//2) SUPONGA QUE TIENE EL SIGUIENTE ARRAY b=[5,4,8,3,4,9,2,3,7,5,2,1] IMPRIMA LO NUMEROS DIVISIBLES POR 3 
// QUE SE ENCUENTRAN EN EL ARRAY DEBE INDICAR QUE NUMERO DIVIDIDO Y EN QUE POSICION SE ENCONTRABA

// b = [5,4,8,3,4,9,2,3,7,5,2,1];

// for (i = 0; i < b.lenght; i++){ 
//     if(b[i] % 3 === 0){
//         document.write("el numero " + b[i]  + " es divisible por 3 y se encuentra en la posisión " + i + "<br>");
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MATRIZ: ES UN ARREGLO MULTIDIMENSIONAL

//PARA QUE SEA MATRIZ TODOS LOS ARREGLOS DEBEN TENER LA MISMA LONGITUD

// let a = [1,2,3];
// let b = [4,5,6];
// let c = [7,8,9];         //(ASÍ TAMBIÉN SE PUEDE HACER UNA MATRIZ)

// let matriz = [a,b,c];

// console.log(matriz[1][1]); //EL PRIMER CORCHETE ME INDICA EN QUE FILA VOY A ESTAR Y EL SEGUNDO CORCHETE ME INDICA LA COLUMNA

// let matriz = [[1,2,3], 
//              [4,5,6], 
//              [7,8,9]];


//3)ESCRIBA UN CODIGO QUE LE PERMITA IMPRIMIR TODOS LOS ELEMENTOS DE UNA MATRIZ

// let a = [1,2,3];
// let b = [4,5,6];
// let c = [7,8,9];         

// let matriz = [a,b,c];

// for(i=0; i<3; i++){

//     for(j=0; j<3; j++){
//         console.log(matriz[i][j]);
//     }
// }