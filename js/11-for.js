// ===========================
// bucles.js
// ===========================

console.log("--- for ---");

// Bucle clásico con contador
for (let i = 0; i < 4; i++) {
  console.log(`Número: ${i}`);
}

// ─────────────────────────────────────────────
// EJERCICIO 1: Números pares del 1 al 20
// ─────────────────────────────────────────────
console.log("--- ejercicio 1 ---");
// Usá un bucle for para mostrar en consola todos los números pares del 1 al 20.
for (let cont = 1; cont <= 20; cont++) {
  if (cont % 2 === 0) {
    console.log("Es par: " + cont);
  }
}
