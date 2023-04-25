/**
 * Tarea 1
 * crear formulario de registro de usuario y carros
 * 
 * 
 * 
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