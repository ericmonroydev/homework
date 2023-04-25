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