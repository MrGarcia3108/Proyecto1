
import inquirer from "inquirer";

const respuesta = await inquirer.prompt([
    {
        type: "password",
        name: "password",
        message: "Ingresa una contraseña:"
    }
]);

let contraseña = respuesta.password;
let numeros = 0;
let mayusculas = 0;
let caracter = "";

for (let i = 0; i < contraseña.length; i++) {
    caracter = contraseña[i];

    if (caracter >= "0" && caracter <= "9"){
        numeros++;
    } else if (caracter >= "A" && caracter <= "Z") {
        mayusculas++;
    }
}

if (contraseña.length >= 8 && numeros >= 1 && mayusculas >= 1) {
    console.log("Contraseña segura");
} else {
    console.log("Contraseña no segura");
    if (contraseña.length < 8) {
        console.log("Debe tener mínimo 8 caracteres.");
    }
    if (numeros < 1) {
        console.log("Debe contener al menos un número.");
    }
    if (mayusculas < 1) {
        console.log("Debe contener al menos una mayúscula.");
    }
}
