//Realizar una función en Javascript, que al recibir como parámetro una cadena de texto, 
//retorne un mensaje que diga si esta formado solo por mayúsculas, solo por minúsculas o está formada por ambas.

let text;

text=prompt("Enter text");

function verify(text) {
    if(text === text.toUpperCase()){
        return "Formed just by uppercase letters";
    }else if(text === text.toLowerCase()){
        return "Formed just by lowercase letters";
    }else {
        return "Formed by both type of letters";
    }
}
console.log(verify(text));