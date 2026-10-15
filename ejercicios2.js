import inquirer from "inquirer";

async function parqueadero() {
    const respuestas = await inquirer.prompt([
        {
            type: 'input',
            name: 'horasimput',
            menssage: 'Ingesar el numero de horas que se quedo el vehiculo',
            validate: (val) =>{
                const numero = parseFloat(val);
                
                if (isNaN(numero) || numero <= 0) {
        return "Ingresa un número de horas válido y mayor que cero";
    }

    return true;
            }
        },
        {
            type: 'confirm',
            name: 'esCoder',
            menssage: 'El usuario es de Riwi?',
            default: false
        }
    ]);
    let horas = parseFloat(respuestas.horasimput);
    let esCoder = respuestas.esCoder;
    let total = 0;
    
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
        total = total * 0.85;
    }
    /*console.log('El total de horas es: ${horas}: ');
    console.log('Es usuario de Riwi ${esCoder');
    console.log('El total a pagar es: ${total} : ');*/
}
parqueadero();