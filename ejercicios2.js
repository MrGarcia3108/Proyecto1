import inquirer from "inquirer";

let horas;
let esCoder;
let total = 0;
let descuento = 0;

async function parqueadero() {
    
    const respuestas = await inquirer.prompt([
        {
            type: 'input',
            name: 'horasimput',
            message: 'Ingresar el numero de horas que se quedo el vehiculo',
            validate: (val) => {
                const numero = parseFloat(val);
                if (isNaN(numero) || numero <= 0) {
                    return "Ingresa un numero de horas valido y mayor que cero";
                }
                return true;
            }
        },
        {
            type: 'confirm',
            name: 'esCoder',
            message: 'El usuario es de Riwi?',
            default: false
        }

    ]);

    horas = parseFloat(respuestas.horasimput);
    esCoder = respuestas.esCoder;

    if (horas <= 1){
        total = 3000;
    }
    else {
        total = 3000 + (horas - 1) * 2000;
    }

    if (total > 20000){
        total = 20000;
    }
    if (esCoder){
        descuento = total * 0.15;
        total = total * 0.85;
    }
    console.log('El total de horas es: ' + horas );
    console.log('Es coder de Riwi?: ',(respuestas.esCoder ? 'Si' : 'No'));
    console.log('Descuento aplicado: ',descuento);
    console.log('El total a pagar es: ',total);
}

parqueadero();