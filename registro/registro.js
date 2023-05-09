/**
 * Tarea 1
 * crear formulario de registro de usuario y un carro
 * 
 *    registro:
 *    nombre,  aperllidos, edad, sexo, correo , password
 * 
 *    marca de auto  === select
 *    autos de interes / submarcas   === checknbox de 5 
 *    tipo de manejo == radio button
 *     
 *    validar campos
 *    usuario: obtener todos los valores, validar que todos esten llenos
 *    auto: que haya seleccionado 1 y un checkbox
 *     
 *    
 *    guardar en objeto
 *    guardar en storage
 *    mostrar datos en la pagina de bienvenido
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


/**
 * 
 *    <select id="ddlViewBy">
        <option value="1">test1</option>
        <option value="2" selected="selected">test2</option>
        <option value="3">test3</option>
     </select> 
 * 

     const e = document.getElementById("ddlViewBy");
     const text = e.options[e.selectedIndex].text;
     let value = e.value;
     
 * 
 * Resultado
 *   value == 2
     text == "test2   
**/

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
