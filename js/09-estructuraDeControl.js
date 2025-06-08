// ─────────────────────────────────────────────
// CONDICIONALES
// ─────────────────────────────────────────────

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

console.log("--- switch ---");

let color = "verde";

// Evalúa múltiples posibles valores
switch (color) {
  case "rojo":
    console.log("El color es rojo");
    break;
  case "verde":
    console.log("El color es verde");
    break;
  default:
    console.log("Color desconocido");
}

// ─────────────────────────────────────────────
// BUCLES
// ─────────────────────────────────────────────

console.log("--- for ---");

// Bucle clásico con contador
for (let i = 0; i < 4; i++) {
  console.log(`Número: ${i}`);
}

console.log("--- while ---");

// Bucle mientras (condición al inicio)
let i = 0;
while (i < 5) {
  console.log("Número: " + i);
  i++;
}

console.log("--- do...while ---");

// Bucle hacer-mientras (condición al final)
let a = 0;
do {
  console.log("Número: " + a);
  a++;
} while (a < 5);

// ─────────────────────────────────────────────
// EJERCICIOS
// ─────────────────────────────────────────────
console.log("--- ejercicio 1 ---");
// 1. Edad para votar
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

//- ejercicio 2
console.log("--- ejercicio 2 ---");

// 2. Clasificación de películas
// Crea una variable clasificacion que tenga un valor como "A", "B", "C", "D" o "F".
// Usá switch para mostrar el mensaje correspondiente:

// "Excelente" si es A

// "Muy bien" si es B

// "Bien" si es C

// "Regular" si es D

// "Reprobado" si es F

// "Clasificación desconocida" en cualquier otro caso

let clasificacion = "C";

switch (clasificacion) {
  case "A":
    console.log("Excelente");
    break;
  case "B":
    console.log("Muy bien");
    break;
  case "C":
    console.log("Bien");
    break;
  case "D":
    console.log("Regular");
    break;
  case "F":
    console.log("Reprobado");
    break;
  default:
    console.log("Clasificación desconocida");
}

//- ejercicio 3
console.log("--- ejercicio 3 ---");
// 3. Precio con descuento
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

//- ejercicio 4
console.log("--- ejercicio 4 ---");

// 4. Números pares del 1 al 20
// Usá un bucle for para mostrar en consola todos los números pares del 1 al 20.

for (let cont = 1; cont <= 20; cont++) {
  if (cont % 2 === 0) {
    console.log("Es par: " + cont);
  }
}

//- ejercicio 5
console.log("--- ejercicio 5 ---");

// 5. Contar hacia atrás con while
// Mostrá los números del 10 al 1 usando un bucle while.

let contador = 10;

while (contador >= 1) {
  console.log(contador);
  contador--;
}

//- ejercicio 6
console.log("--- ejercicio 6 ---");

// 6. Sumar hasta superar 100 con do...while
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
