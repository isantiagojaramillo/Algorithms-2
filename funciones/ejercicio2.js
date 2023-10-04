//Realizar una función en Javascript que reciba un número como parámetro y retorne falso si es negativo.

let num;

num=parseFloat(prompt("Enter number"));

function number(num) {
    if (num<0){
        return false;
    }else{
        return true;
    }
}
console.log(number(num));