/* 
LOCAL STORAGE

localStorage

*/

// agregar un valor


function guardarUsuario(email) {
    const objeto = { email: email };
    const valores = JSON.stringify(objeto);
    // guardamos en local storage
    localStorage.setItem("usuario", valores);
}


function obtenerUsuario() {
    const datos = localStorage.getItem("usuario");
    const usuario = JSON.parse(datos);
    const perfil = document.getElementById("perfil");
    perfil.innerHTML = usuario.email;
}

