/* Arreglos, arrays o vectores (listas) en JavaScript

Los arrays son objetos similares a una lista, cuyo prototipo proporciona metodos
para efectuar operaciones de recorrido o mutacion (modificacion).

La longitud como el tipo de elemento de un array es variable, por lo tanto pueden
variar en cualquier momento, almacenarse en ubicaciones no contiguas y no se  garantiza
cuanta densidad de datos tendra el objeto en cuestion. */

//Crear un array:

let elementos = ["Colegio", 20, true, "Estudio"];
console.log(elementos);

//Obtener el numero de entradas de un array: Para ello utilizamos la propiedad .length, asi conocemos el tamano
//del vector con el cual trabajamos. Muy importante para operaciones posteriores.

let tamano = elementos.length
console.log(tamano);

//Acceder al array utilizando el indice
//Indice: Las posiciones de un array empiezan desde la 0 hasta el ultimo elemento del array,
//hay que tener cuidado con el tamano del array puesto que en JavaScript el hecho de que sean
//dinamicos fuerza al programador a prestar atencion de donde guarda cada elemento.

let gatos = ["Kira", "Anastasia", "Ajax"];

//Para acceder al primer elemento se usa el indice 0.

let primero = gatos[0];
console.log(primero);

//Para acceder al ultimo elemento se usa el ultimo indice, o mejor aun, la formula generalizada.
//Esto funciona ya que length devuelve el numero de elementos del array, y como los indices
//inician en 0, el total de elementos menos 1 siempre correspondera al ultimo elemento del vector

let ultimo = gatos[gatos.length - 1];
console.log(ultimo);

//Para modificar un elemento del array, basta con indicar mediante asignacion el cambio
//en ese elemento especifico utilizando su indice. Por ejemplo, cambiemos el SEGUNDO
//elemento del array gatos.

gatos[1] = "Snowball";
console.log(gatos);

//Para agregar un nuevo elemento utilizando indices podemos utilizar length.

gatos[gatos.length] = "Cute";
console.log(gatos);

//Para agregar elementos al final del array, se puede usar la propiedad .push
//Esta propiedad agregara tantos elementos en orden como se le indique dentro de los parentesis

let perros = ["Arkan", "Mateus", "Zeus"];
perros.push("Sand", "Kan", "Sasha");

console.log(perros);

//Para eliminar elementos que se encuentran al final del array, utilizamos la propiedad .pop.

perros.pop();
console.log(perros); //Al borrar el ultimo elemento, "Sasha" desaparece.

//Si revisamos el elemento que acabamos de eliminar, posicion 5 exactamente veremos que ahora
//dira "undefined" puesto que el elemento ya no existe, pero es posible acceder gracias al 
//dinamismo de los array en JavaScript.

console.log(perros[5]); //undefined puesto que borramos a "Sasha".

//Para concatenar dos arreglos vamos a utilizar la propiedad .concat de JavaScript.

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = arr1.concat(arr2);
console.log(arr3); //arr3 contiene los elementos de arr1 y arr2 concatenados desde el ultimo elemento.

//Para mostrar los elementos de un arreglo separados por algun separador, puede usarse .join

let nombres = ["Juan", "Pedro", "Hector"];
let nombres_mostrar = nombres.join("|"); //nombres_mostrar se vuelve un string, gracias a la operacion con .join
console.log(nombres_mostrar);

//Para ordenar datos alfabeticamente, podemos utilizar .sort

let familia = ["Isabel", "Luisa", "Juan", "Hernesto", "Walter"];
let ordenado = familia.sort();
console.log(ordenado);

//Para colocar un array en 'reversa' es decir, el ultimo elemento se vuelva el primero
//y asi sucesivamente utilizamos .reverse

let numero = [1,2,3,4,5,6]
let reversa = numero.reverse();
console.log(reversa);

//Como recorrer los elementos de un array:

//forma 1: utilizando un for loop sobre los indices.

let arr = ["manzana", "naranja", "pera"];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//forma 2: utilizando for..of

let frutas = ["uva", "mango", "manzana"];

for (let fruit of frutas) {
    console.log(fruit);
}

//Aunque se puede usar el for..in, no suele sugerirse ya que este itera
//sobre todas las propiedades no solo las numericas.
//No esta optimizado es 10 a 100 veces mas lento.

//Otras funciones utiles con arrays:

//Agregar un elemento al principio de un array:

let ensalada = ["tomate", "cebolla"];
ensalada.unshift("pepino"); //esto es un numero, si lo guardas en una variable

console.log(ensalada);

//Eliminar el primer elemento de un array:

let salad = ["tomato", "onion", "lettuce"];
salad.shift()

console.log(salad);

//Encontrar el indice de un elemento del array

let fruits = ["banana", "apple", "orange"];
let pos = fruits.indexOf("banana");

console.log(pos);

//Eliminar elementos a partir de su posicion

let varios = ['1','2','3','4','5','6'];
let position = varios.indexOf('2'); //se elimina el elemento que coincide con el index 2
let eliminado = varios.splice(position,1); //elemento(s) eliminado

console.log(eliminado);
console.log(varios);

//NOTA: Al utilizar Splice se puede sacar una copia parcial de los elementos de un array.

