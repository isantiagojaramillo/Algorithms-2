//Realizar una función que, dada una cadena de texto ingresada por el usuario, valide la cantidad de caracteres escritos, 
//de acuerdo con un máximo de caracteres definidos por defecto en una constante. Si la cadena de caracteres supera el tamaño, 
//retorna falso y de lo contrario true.

let maximum=5;
let countCharacters;
let text;

text=prompt("Enter text");
meterCharacters = text.length;

function verify(meterCharacters) {
    if(meterCharacters>maximum){
        return false;
    }else{
        return true;
    }
}
console.log(verify(meterCharacters));