//Escriba un programa que solicite como entrada un correo electrónico, debe verificar que la sentencia contenga @.

let email;
let at=false;

email=prompt("Enter email");

function electronicMail() {
    for(let i=0; i<email.lenght; i++){
        if(email[i] === "@"){
            console.log(email[i])
            at=true;
        }
    }
    console.log(at)
    if(at === false){
        return "invalid email";
    }else{
        return "valid email";
    }

}
console.log(electronicMail());
