import inquirer from "inquirer";

const SNumero = Math.floor(Math.random() * 20) +1;
let acerto = false;

console.log("Adivina el numero secreto");

for (let i = 1; i <= 5; i++) {
    const respuestas = await inquirer.prompt([
        {
            type: 'input',
            name: 'Adivina',
            message: 'intento numero ' + i,
        }
    ]);
    const Adivina = Number(respuestas.Adivina)
    if (Adivina === SNumero){
        console.log('Felicidades, ganaste');
        acerto = true;
        break;
    }else if (Adivina < SNumero){
        console.log('El numero secreto es mayor')
    }else {
        console.log('El numero secreto es menor')
    }
    if (i == 5){
        console.log('Perdiste')
    }
}

