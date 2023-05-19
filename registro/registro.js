function main() {
    const htmlForm = `<form method="post">
    <h2>Registro</h2>
    <label for="nombre">Nombre(s)</label>
    <input type="text" id="nombre" name="nombre" placeholder="nombre(s)" required>
    <br>
    <label for="apellidos">Apellidos</label>
    <input type="text" id="apellidos" name="apellidos" placeholder="apellidos" required>
    <br>
    <label for="edad">Edad</label>
    <input type="number" id="edad" name="edad" min="1" max="99" placeholder="00" required>
    <br>
    <div class="sexo">
        <input type="radio" id="Masculino" name="sexo" value="Masculino" required>
        <label for="sexo">Masculino</label>
        <br>
        <input type="radio" id="Femenino" name="sexo" value="Femenino">
        <label for="sexo">Femenino</label>
    </div>
    <br>
    <label for="email">Correo</label>
    <input type="email" id="email" placeholder="correo@ejemplo.mx" name="email" required />
    <br>
    <label for="contrasena">Contraseña</label>
    <input type="password" name="password" id="contrasena" placeholder="*************" required />
    <br>
    <input type="button" value="Regitrarse" onclick="Registrar()" />
    <br>
    <span id="mensaje"></span>
</form>`;


    const app = document.getElementById("app");
    app.innerHTML = htmlForm
}

function Registrar() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.querySelector("input[name=sexo]:checked").value;
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje")
    const contrasena = document.getElementById("contrasena").value;
    if (nombre && apellidos && edad && sexo && validEmail.test(email) && contrasena) {
        const objeto = { email, nombre, apellidos, edad, sexo, contrasena };
        console.log(objeto)
        guardarUsuario(objeto)
    } else {
        mensaje.innerHTML = "faltan campos requeridos"
    }

}

function guardarUsuario(objeto) {
    const valores = JSON.stringify(objeto);
    // guardamos en local storage
    localStorage.setItem("usuario", valores);
    location.href = "perfil.html"
}

function obtenerUsuario() {
    const datos = localStorage.getItem("usuario");
    const usuario = JSON.parse(datos);
    return usuario;
}

function salir() {
    localStorage.clear()
    location.href = "registro.html"
}

main();




