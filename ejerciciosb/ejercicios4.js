import inquirer from "inquirer";

let cuentas = 0;

async function RiwiCoders() {
    const respuestas = await inquirer.prompt ([
        {
            type: 'input',
            name: 'riwiInput',
            message: 'Ingresa un numero'
        }
    ]);
    cuentas = Number(respuestas.riwiInput);
    for (let i = 1; i <= cuentas; i++) {
        if (i%3 == 0 && i%5 == 0) {
            console.log("RiwiCoder");
        } else if (i%3 == 0) {
            console.log("Riwi");
        } else if (i%5 == 0) {
            console.log("Coder");
        } else {
            console.log(i);
        }
    }
}
RiwiCoders();