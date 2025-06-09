console.log("--- do...while ---");

// Bucle hacer-mientras (condición al final)
let a = 0;
do {
  console.log("Número: " + a);
  a++;
} while (a < 5);

// ─────────────────────────────────────────────
// EJERCICIO 1: Sumar hasta superar 100 con do...while
// ─────────────────────────────────────────────
console.log("--- ejercicio 1 ---");
// Sumá números del 1 en adelante, uno por uno, hasta que la suma acumulada sea mayor a 100.
// Mostrá la suma total y cuántos números se sumaron.
// Usá un do...while.
let suma = 0;
let numero = 1;
let cantidadRepeticiones = 0;
do {
  suma += numero;
  numero++;
  cantidadRepeticiones++;
} while (suma <= 100);

console.log("Total sumado: " + suma);
console.log("Cantidad de números sumados: " + cantidadRepeticiones);
