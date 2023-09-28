fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => respuesta.json())
  .then((json) => {
    // obtenemos resulyado ya procesado
    const a = JSON.stringify(json);
    const b = JSON.parse(a);

    // crear temnplate
    // mostrar solo 10 fotos
    // al dar cliuck a la foto mi muestre una pagina solo con la info de esa foto
  })
  .catch((error) => {
    console.log(error);
  });
