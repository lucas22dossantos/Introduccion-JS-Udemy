// ===============================
// ¿Qué es la Notification API?
// ===============================

// La Notification API permite mostrar notificaciones nativas del navegador.

// Usos comunes:
// - Alertas.
// - Recordatorios.
// - Eventos completados.

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Permiso concedido para mostrar notificaciones");
  } else if (permission === "denied") {
    console.log("Permiso denegado");
  }
});

// Mostrar una notificación
// Una vez que el usuario dio permiso, podés usar el constructor Notification:

if (Notification.permission === "granted") {
  new Notification("¡Hola!", {
    body: "Esta es una notificación",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  });
}
// Estructura básica: new Notification(título, opciones);

// - título: Texto principal.
// - opciones (objeto):
// - body: Texto secundario.
// - icon: URL del ícono.
// - image: Imagen grande (opcional).
// - tag: ID para evitar duplicados.
// - requireInteraction: Mantiene la notificación hasta que el usuario interactúe.

// ===============================
// ejercicio 1
// ===============================

// 1. Notificación simple al cargar el script
// Objetivo: Solicitar permiso y mostrar una notificación de bienvenida si fue concedido.

// // Al cargar el archivo, pedí permiso y mostrá "Bienvenido a la app"

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Permiso concedido para mostrar notificaciones");

    new Notification("¡Bienvenida!", {
      body: "Bienvenido a la app",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    });
  } else if (permission === "denied") {
    console.log("Permiso denegado");
  }
});

// ===============================
// ejercicio 2
// ===============================

//  Mostrar una notificación solo si no está bloqueada
//  Objetivo: Si el permiso ya es "granted", mostrar la notificación. Si es "denied", mostrar mensaje por consola.

// // Verificar el estado de permiso y mostrar mensaje apropiado
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    new Notification("¡Práctica 2!", {
      body: "Ejercicio 2 completado",
      icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    });
  } else if (permission === "denied") {
    console.log("Permiso denegado");
  }
});

// ===============================
// ejercicio 3
// ===============================
//  Temporizador con notificación
//  Objetivo: Usar setTimeout() para mostrar una notificación después de 5 segundos (como si fuera un recordatorio).

// Mostrar una notificación de "Ya pasaron 5 segundos"

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Permiso concedido para mostrar notificaciones");

    setTimeout(function () {
      new Notification("¡Práctica 3!", {
        body: "Han pasado 5 segundos",
        icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      });
    }, 5000);
  } else if (permission === "denied") {
    console.log("Permiso denegado");
  }
});

// ===============================
// ejercicio 4
// ===============================

// Simular varias tareas y notificar el estado
// Objetivo: Crear un array de tareas y recorrerlo para mostrar una notificación por cada tarea completada.

// // Array: ["Cargar datos", "Guardar cambios", "Cerrar sesión"]
// // Mostrar una notificación por cada una (una cada 2 segundos)

const tareas = ["Cargar datos", "Guardar cambios", "Cerrar sesión"];

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Permiso concedido para mostrar notificaciones");

    for (let i = 0; i < tareas.length; i++) {
      setTimeout(() => {
        new Notification(tareas[i], {
          body: `Tarea completada: ${tareas[i]}`,
          icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
        });
      }, i * 2000); // Notificación cada 2 segundos
    }
  } else if (permission === "denied") {
    console.log("Permiso denegado");
  }
});
