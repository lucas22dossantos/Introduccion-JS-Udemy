// ===========================
// switch.js
// ===========================

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
// EJERCICIO 1: Clasificación de películas
// ─────────────────────────────────────────────
console.log("--- ejercicio 1 ---");
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
