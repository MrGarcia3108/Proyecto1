import inquirer from "inquirer";

let Cuenta = 0;

async function Despegue () {
    const respuestas = await inquirer.prompt([
        {
            type: 'input',
            name: 'CuentaRegresiva',
            message: 'Escribe el numero de la cuenta regresiva',
            validate: (val) => {
                const numero = Number(val);
                if (isNaN(numero) || numero <= 0){
                    return "Ingresa un numero valido y mayor a cero";
                }
                return true;
            }
        }
    ]);
    Cuenta = Number(respuestas.CuentaRegresiva);

    for (let i = Cuenta; i >= 1; i--) {
            console.log(i);
        }
        console.log("¡Despegue!");
}

Despegue();