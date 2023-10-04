let array = [19, 21, 25, 25.6, 29, 30, 27, 26, 28, 25.6, 31];
let suma=0;

for(i=0; i<array.length; i++){
    suma+= array[i];
}
promedio=suma/array.length;
console.log("El promedio es: "+promedio);

if(promedio === 25.6){
    console.log("Calor");
}else{
    console.log("Frío");
}