//Escriba una función que solicite al usuario dos matrices y retorne la suma de estas. Si las matrices no se pueden sumar, 
//debe decirle al usuario “operación invalida”.

let matrix1 = [];
let matrix2 = [];
let matrix3 = [];
let dataMatrix1;
let dataMatrix2;
let numbersColumn1, numbersColum2, numbersRow1, numbersRow2;

numbersColumn1=parseFloat(prompt("Enter matrix 1 quantity of columns"));
numbersRow1=parseFloat(prompt("enter matrix 1 quantity of rows"));

numbersColumn2=parseFloat(prompt("Enter matrix 2 quantity of columns"));
numbersRow2=parseFloat(prompt("enter matrix 2 quantity of rows"));

if(numbersColumn1 === numbersColumn2 && numbersRow1 === numbersRow2){
    function fillmatrix1() {
        for(let i=0; i<numbersRow1; i++){
            matrix1[i] = [];
            for(let j=0; j<numbersColumn1; j++){
                dataMatrix1=parseFloat(prompt("Enter matrix 1 data of row "+i+" column "+j));
                matrix1[i][j]=dataMatrix1;
            }
        }
        return matrix1;
    }

    function fillmatrix2() {
        for(let i=0; i<numbersRow2; i++){
            matrix2[i] = [];
            for(let j=0; j<numbersColumn2; j++){
                dataMatrix2=parseFloat(prompt("Enter matrix 2 data of row "+i+" column "+j));
                matrix2[i][j]=dataMatrix2;
            }
        }
        return matrix2;
    }

    function addition() {
        for(let i=0; i<matrix1.length; i++){
            matrix3[i]=[];
            for(let j=0; j<matrix2.length; j++){
                matrix3[i][j]=matrix1[i][j]+matrix2[i][j];
            }
        }
        return matrix3
    }
    console.log(fillmatrix1());
    console.log(fillmatrix2());
    console.log(addition());
}else{
    console.log("Matrices can't be added");
}
