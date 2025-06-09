// ===========================
// if.js
// ===========================

console.log("--- if ---");

let puntos = 1000;

// Condición simple
if (puntos >= 500) {
  console.log("Es mayor o igual a 500");
}

// Condición con else
if (puntos >= 800) {
  console.log("Es mayor o igual a 800");
} else {
  console.log("Es menor a 800");
}

// Condición con else if
if (puntos >= 1000) {
  console.log("Excelente puntuación");
} else if (puntos >= 800) {
  console.log("Buena puntuación");
} else {
  console.log("Sigue intentando");
}

// ─────────────────────────────
// EJERCICIO 1: Edad para votar
// ─────────────────────────────
console.log("--- ejercicio 1 ---");
// Crea una variable edad.
// Usá un if para mostrar en consola:
// "Podés votar" si es mayor o igual a 18,
// "No podés votar" si es menor.
let edad = 17;
if (edad >= 18) {
  console.log("Podés votar");
} else {
  console.log("No podés votar");
}

// ───────────────────────────────────────
// EJERCICIO 2: Precio con descuento
// ───────────────────────────────────────
console.log("--- ejercicio 2 ---");
// Crea una variable precio y otra esEstudiante (true o false).
// Si es estudiante, aplicá un 20% de descuento al precio y mostrás el nuevo precio.
// Si no, mostrá el precio sin cambios.
let precio = 1000;
let esEstudiante = true;
if (esEstudiante) {
  let precioConDescuento = precio * 0.8;
  console.log("Precio con descuento: " + precioConDescuento);
} else {
  console.log("Precio sin descuento: " + precio);
}
