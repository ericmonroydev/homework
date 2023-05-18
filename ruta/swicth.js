// uso de switch 



function usoSwicth(expresion) {// recibe la expreion o condición
    let x = "0";
    let text;
    switch (x) { // valida entrada
        case 0:// se cumple condición
            text = "Off"; // se ejecuta tarea
            break; // se detiene flujo
        case 1:
            text = "On";
            break;
        default:// si no se cumple la condición hacemos algo por default
            text = "No value found";
    }
}
