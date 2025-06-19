// ===============================
// ¿Qué es una promesa en JavaScript?
// ===============================

// Una promesa (Promise) es un objeto que representa el resultado eventual (o fallo) de una operación asíncrona.
// Por ejemplo: pedir datos a un servidor, leer un archivo, esperar unos segundos, etc.

// Estados de una Promesa:

// pending:	    Promesa pendiente, aún no se completó
// fulfilled:	Se completó exitosamente
// rejected:	Falló, ocurrió un error

//sintaxis:
const promesa = new Promise((resolve, reject) => {
  // operación asíncrona
  let todoOk = true;

  if (todoOk) {
    resolve("¡Éxito!");
  } else {
    reject("Hubo un error.");
  }
});

promesa
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// ===============================
// ¿Qué es .then()?
// ===============================

// espera que la promesa se resuelva.

// Si se cumple con resolve(...), el código que está dentro del .then() se ejecuta.

// El resultado es el valor que se le pasó a resolve.

// ===============================
// ¿Qué es .catch()?
// ===============================

// Si se llama a reject(...), el .catch() captura el error.

// El error es lo que le pasaste a reject.

// ===============================
// Ejercicio 1: Verificación de usuario
// ===============================

// Estás simulando un sistema que verifica si un nombre de usuario es válido.
// Si el nombre es "lucas", se considera válido. Cualquier otro, es inválido.

// Tu objetivo:
// Crear una promesa que reciba un nombre.

// Si el nombre es "lucas", usá resolve("Usuario válido").

// Si no, usá reject("Usuario no encontrado").

// Usá .then() y .catch() para mostrar el resultado por consola.

const verificarNombre = new Promise((resolve, reject) => {
  let nombre = "lucas";

  if (nombre === "lucas") {
    resolve("Usuario válido");
  } else {
    reject("Usuario no encontrado");
  }
});

verificarNombre
  .then((i) => {
    console.log("Resultado:" + i);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// ===============================
// Ejercicio 2: Simulación de carga con setTimeout
// ===============================

// Querés simular que una app tarda 2 segundos en cargar datos.
// Si hay conexión (hayConexion = true), después de 2 segundos muestra "Datos cargados".
// Si no hay conexión (hayConexion = false), muestra "Sin conexión".

// Crear una promesa que use setTimeout (espera 2000 ms).

// Si hayConexion es true, usá resolve("Datos cargados").

// Si es false, usá reject("Sin conexión").

// Mostrá el resultado con .then() y .catch().

const hayConexion = true;

const cargarDatos = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (hayConexion) {
      resolve("Datos cargados");
    } else {
      reject("Sin conexión");
    }
  }, 2000);
});

cargarDatos
  .then((i) => {
    console.log("Resultado:", i);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
