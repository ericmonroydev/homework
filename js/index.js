// uso de la consola

// Abrimos con  console y añadim os el método
// metodo abreviado en teclado  clg
console.log();

// Uso de let Y const
function imprimiNombre() {
    const nombre = document.getElementById("nombre");
    nombre.innerHTML = "Eric Monroy";
    edad(35);
}

function edad(a) {
    const edad = document.getElementById("edad");
    edad.innerHTML = a;
}


imprimiNombre();