import inquirer from "inquirer";

let SNumero = 14;

async function AdivJuego () {
    const respuestas = await inquirer.prompt([
        {
            type: 'input',
            name: 'Adivina',
            message: ''
        }
    ])
}