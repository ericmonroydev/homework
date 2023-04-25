
/* OPERADORES LOGICOS */

/* 
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true
*/

/* 
let x = 5;
 ==	equal to	x == 8	false	
==	equal to	x == "5"	true	
===	equal value and type	x === "5"	false	
===	equal value and type	x === 5	true	
!=	not equal	x != 8	true	
!==	not equal value or type	x !== "5"	true	
!==	not equal value or type	x !== 5	false	
>	greater than	x > 8	false	
<	less than	x < 8	true	
>=	greater or equal to	x >= 8	false	
<=	less or equal to	x <= 8	true

*/

const foco = document.getElementById("email")
foco.focus();
let x = 5;

function login() {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");
    const contrasena = "1234567";
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email && validEmail.test(email) && password) {
        if (password === contrasena) {
            //alert("ENTRANDO");
            mensaje.innerHTML = "ENTRANDO";
            mensaje.classList.add("exito");
            guardar();
            location.href = "bienvenido.html"
        } else {
            mensaje.innerHTML = "CONTRASEÑA INCORRECTA";
            // mensaje.classList.remove("exito"); 
            mensaje.classList.add("error");
        }
    } else {
        mensaje.innerHTML = "INGRESA TUS DATOS CORRECTAMENTE";
        mensaje.classList.add("error");
    }

}





