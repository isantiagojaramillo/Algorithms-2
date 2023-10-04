//Realizar una función que reciba un número como parámetro y retorne “PAR” si es par o de lo contrario “IMPAR”

let num;

num=parseFloat(prompt("Enter number"));

function number(num) {
    if (num % 2 === 0){
        return "even"; //par
    }else{
        return "odd";// impar
    }
}
console.log(number(num));