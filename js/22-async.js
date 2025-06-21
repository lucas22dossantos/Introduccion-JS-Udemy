// ===============================
// ¿Qué son async y await?
// ===============================

// - async convierte una función en una función asíncrona, lo que significa que siempre devolverá una promesa.

// - await solo se puede usar dentro de una función async. Sirve para pausar la
//   ejecución de la función hasta que una promesa se resuelva o rechace.

//Ejemplo

// Definimos una función asíncrona llamada obtenerDatos
async function obtenerDatos() {
  try {
    // Usamos 'fetch' para hacer una solicitud HTTP GET a la URL de una API
    // 'await' pausa la ejecución hasta que la respuesta llegue
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    // La respuesta que obtuvimos es un objeto 'Response' con datos en formato JSON (texto)
    // Usamos .json() para convertir esos datos a un objeto JavaScript
    const usuarios = await respuesta.json();

    // Mostramos en la consola el resultado convertido: un array de usuarios
    console.log(usuarios);
  } catch (error) {
    // Si ocurre algún error (por ejemplo, no hay conexión), lo atrapamos aquí
    // y mostramos el mensaje de error en la consola
    console.log("Error:", error);
  }
}

// Llamamos a la función para que se ejecute
//obtenerDatos();

// ===============================
// ¿Para qué se usa?
// ===============================

// - Leer datos de una API.

// - Esperar procesos largos sin bloquear el resto del código.

// - Reemplazar el uso de .then() en promesas y hacer que el código sea más limpio.

// ===============================
// Hacer dos consultas con fetch usando async/await
// ===============================
async function obtenerDatos() {
  try {
    // Iniciamos ambas consultas al mismo tiempo
    //promise.all perimite ejecutar varias promesas al mismo tiempo
    const [respuestaUsuarios, respuestaPosts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);

    // Convertimos ambas respuestas en JSON
    const usuarios = await respuestaUsuarios.json();
    const posts = await respuestaPosts.json();

    console.log("Usuarios:", usuarios);
    console.log("Posts:", posts);
  } catch (error) {
    console.log("Error:", error);
  }
}

//obtenerDatos();

// ===============================
// Ejercicio 1: Mostrar los nombres de los usuarios
// ===============================

// Hacer una función asíncrona que obtenga los usuarios desde https://jsonplaceholder.typicode.com/users
// y muestre por consola solo sus nombres.

// Recorré el array de usuarios y mostrá por consola el nombre de cada uno.

async function obtenerUsuarios() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    const usuarios = await respuesta.json();

    for (let i = 0; i < usuarios.length; i++) {
      console.log(usuarios[i].name);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

//obtenerUsuarios();

// ===============================
// Ejercicio 2: Relacionar usuarios con sus posts
// ===============================

// Hacer una función que obtenga usuarios y posts al mismo tiempo usando
// Promise.all, y luego muestre cuántos posts tiene cada usuario.

// 📋 Consigna:
// Hacé dos consultas con fetch en paralelo usando Promise.all:

// https://jsonplaceholder.typicode.com/users

// https://jsonplaceholder.typicode.com/posts

// Convertí ambas respuestas a JSON.

// Para cada usuario, contá cuántos posts le pertenecen (userId del post coincide con id del usuario).

// Mostrá en consola algo así:

async function obtenerDatosdobles() {
  try {
    const [respuestaUsuarios, respuestaPosts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);

    const usuarios = await respuestaUsuarios.json();
    const posts = await respuestaPosts.json();

    for (let i = 0; i < usuarios.length; i++) {
      let contador = 0;
      for (let j = 0; j < posts.length; j++) {
        if (posts[j].userId === usuarios[i].id) {
          contador++;
        }
      }
      console.log("nombre: " + usuarios[i].name, "post: " + contador);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
obtenerDatosdobles();
