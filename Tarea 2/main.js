// módulos necesarios
const fs = require('fs');
const readline = require('readline');

// crear interfaz para menú interactivo
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// función para mostrar menú
function mostrarMenu() {
    console.log("\n--- MENÚ ---");
    console.log("1. Leer archivo inventario.inv");
    console.log("2. Salir");
    rl.question("Seleccione una opción: ", manejarOpcion);
}

// función para manejar opciones
function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            leerArchivo();
            break;
        case '2':
            console.log("Saliendo del programa...");
            rl.close();
            break;
        default:
            console.log("Opción inválida. Intente nuevamente.");
            mostrarMenu();
    }
}
// función para leer archivo
function leerArchivo() {
    try {
        const data = fs.readFileSync('inventario.inv', 'utf8');
        console.log("\nContenido del archivo:");
        console.log(data);
    } catch (error) {
        console.log("Error: No se pudo leer el archivo inventario.inv");
    }
    mostrarMenu();
}

// iniciar programa
mostrarMenu();