/* 
LOCAL STORAGE

localStorage

*/

// agregar un valor

function guardar() {
    const valores = JSON.stringify({
        nombre: "eric",
        apellidos: "monroy"
    })
    localStorage.setItem("usuario", valores);
}



