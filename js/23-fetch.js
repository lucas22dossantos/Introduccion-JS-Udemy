// ===============================
// ¿Qué es fetch?
// ===============================

// fetch es una función de JavaScript que permite hacer solicitudes
// HTTP a un servidor o a una API, para obtener o enviar datos..

// ===============================
// ¿Qué tipo de cosas podemos hacer con fetch?
// ===============================

// - GET:    Obtener datos del servidor (leer)
// - POST:   Enviar datos nuevos al servidor (crear)
// - PUT:    Reemplazar completamente algo (editar todo)
// - PATCH:  Editar parcialmente
// - DELETE: Eliminar datos del servidor                 |

//  Ejemplo simple: leer datos con GET

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos); // muestra los datos obtenidos
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });

// ===============================
// Ejercicio 1
// ===============================

// Haciendo una solicitud GET con fetch, obtené los primeros 5 posts de la siguiente API:
// https://jsonplaceholder.typicode.com/posts
// Mostrá en la consola los títulos (title) de esos 5 posts.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    for (let i = 0; i < 5; i++) {
      console.log(datos[i].title);
    }
  })

  .catch((e) => {
    console.log(e);
  });

// ===============================
// Ejercicio 2
// ===============================
// Haciendo una solicitud GET a esta API:
// https://jsonplaceholder.typicode.com/users
// Mostrá en la consola:

// El nombre (name),

// El nombre de usuario (username),

// Y el correo electrónico (email)
// de cada usuario.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => respuesta.json())
  .then((usuarios) => {
    for (let i = 0; i < usuarios.length; i++) {
      console.log(usuarios[i].name, usuarios[i].username, usuarios[i].email);
    }
  })

  .catch((e) => {
    console.log(e);
  });

// ===============================
// Ejercicio 3
// ===============================

// Simulá el envío de un nuevo post usando fetch con método POST a:
// https://jsonplaceholder.typicode.com/posts
// Enviá estos datos en el cuerpo del mensaje:

// {
//   title: "Post de práctica",
//   body: "Este es un post de prueba creado con fetch",
//   userId: 7
// }

// Mostrá en la consola:
// La respuesta del servidor (debería incluir un id generado automáticamente).

const url = "https://jsonplaceholder.typicode.com/posts";
const data = {
  title: "Post de práctica",
  body: "Este es un post de prueba creado con fetch",
  userId: 7,
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((respuesta) => respuesta.json())
  .then((data) => {
    console.log("Respuesta del servidor:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
