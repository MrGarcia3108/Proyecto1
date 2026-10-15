import inquirer from "inquirer";

async function clasificador() {
    const respuestas = await inquirer.prompt([
        {
            type: 'input',
            name: 'temperInput',
            message: 'ingresa la temperatura en grados Celsius:',
        }
    ]);

    const temperatura = parseFloat(respuestas.temperInput);

    if (isNaN(temperatura)) {
    console.log("Error, valor ingresado no permitido");
}
else if (temperatura <10) {
    console.log("Hace frio, lleva chaqueta");  
}
else if (temperatura >=10 && temperatura <= 24) {
    console.log("Clima templado");
}
else if (temperatura >= 25) {
    console.log("hace calor,hidratate")
}  
}
clasificador();
