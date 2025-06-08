// ─────────────────────────────────────────────
//  ¿QUÉ SON LAS FUNCIONES?
// ─────────────────────────────────────────────

// Una función es un bloque de código reutilizable que realiza una tarea específica.
// Puedes definir una función una vez y luego llamarla todas las veces que necesites.

//  Declaración de función
function saludar() {
  console.log("Hola Mundo");
}

// Las funciones pueden llamarse antes y después de su definición
saludar(); // "Hola Mundo"

// ─────────────────────────────────────────────
//  EXPRESIÓN DE FUNCIÓN
// ─────────────────────────────────────────────

// Es una función sin nombre que se asigna a una variable.
//  No puede llamarse antes de su definición.

let suma = function () {
  console.log(2 + 2);
};

suma(); // 4

// ─────────────────────────────────────────────
//  IIFE (Immediately Invoked Function Expression)
// ─────────────────────────────────────────────

// Es una función que se define y se ejecuta inmediatamente.

(function () {
  console.log("Esto se ejecuta inmediatamente");
})(); // "Esto se ejecuta inmediatamente"

// ─────────────────────────────────────────────
//  FUNCIONES VS MÉTODOS
// ─────────────────────────────────────────────

// Función: bloque de código que no pertenece a ningún objeto
function saludar(nombre) {
  return "Hola, " + nombre;
}

console.log(saludar("Ana")); // "Hola, Ana"

// Método: función que pertenece a un objeto
const persona = {
  nombre: "Juan",
  saludar: function () {
    return "Hola, soy " + this.nombre;
  },
};

console.log(persona.saludar()); // "Hola, soy Juan"

// ─────────────────────────────────────────────
//  PARÁMETROS Y ARGUMENTOS
// ─────────────────────────────────────────────

// Parámetros: variables que defines al crear la función
function saludarConEdad(nombre, edad) {
  console.log("Hola " + nombre + ", tienes " + edad + " años.");
}

// Argumentos: valores reales que pasas al llamar la función
saludarConEdad("Lucas", 25); // "Hola Lucas, tienes 25 años."

// ─────────────────────────────────────────────
//  FUNCIONES QUE RETORNAN VALOR
// ─────────────────────────────────────────────

// Una función puede devolver un resultado con la palabra clave return
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
console.log(resultado); // 8

// ─────────────────────────────────────────────
//  MÉTODOS DE PROPIEDAD
// ─────────────────────────────────────────────

// Es una función almacenada como propiedad de un objeto.
// Se usa para dar comportamiento al objeto y acceder a sus datos con `this`.

const saludarPersona = {
  nombre: "Lucía",
  saludar() {
    return "Hola, soy " + this.nombre;
  },
};

console.log(saludarPersona.saludar()); // "Hola, soy Lucía"

// ─────────────────────────────────────────────
//  ARROW FUNCTIONS (FUNCIONES FLECHA)
// ─────────────────────────────────────────────

// Forma corta de escribir funciones. No tienen su propio `this`.

const saludarFlecha = () => {
  console.log("Hola");
};

saludarFlecha(); // "Hola"

// También se puede devolver directamente el resultado
const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(4, 6)); // 10

// Si solo tienes un parámetro, puedes omitir los paréntesis
const doblar = (x) => x * 2;

console.log(doblar(5)); // 10

// ─────────────────────────────────────────────
//  DIFERENCIAS ENTRE FUNCIÓN NORMAL Y ARROW FUNCTION
// ─────────────────────────────────────────────

// | Característica                | Función normal         | Arrow function                         |
// |------------------------------|-------------------------|----------------------------------------|
// | Sintaxis                     | Más larga               | Más corta                              |
// | Tiene su propio `this`       | ✅ Sí                   | ❌ No (hereda del contexto padre)       |
// | Hoisting (se eleva)          | ✅ Sí                   | ❌ No                                   |
// | Ideal para métodos de objeto | ✅ Sí                   | ❌ No siempre (por el `this`)           |

// ─────────────────────────────────────────────
//  EJERCICIOS
// ─────────────────────────────────────────────
console.log("-- ejercicio 1 --");
// 1. Función básica: Crea una función que imprima tu nombre completo en consola.

let nombreCompleto = function () {
  console.log("Lucas Dos Santos");
};
nombreCompleto();

// --------- ejercicio 2 ---------
console.log("-- ejercicio 2 --");
// 2. Crea una función llamada mostrarHoraActual que muestre en consola la hora actual (usa new Date())

let mostrarHoraActual = function () {
  let ahora = new Date();
  console.log("La hora es: " + ahora.getHours() + ":" + ahora.getMinutes());
};

mostrarHoraActual();

// --------- ejercicio 3 ---------
console.log("-- ejercicio 3 --");

//  3. Expresión de función
// Crea una función expresada llamada esPar que reciba un número y devuelva true si es par o false si es impar.

let esPar = function (n1) {
  return n1 % 2 === 0;
};

console.log(esPar(9));

// --------- ejercicio 4 ---------
console.log("-- ejercicio 4 --");

// 4. IIFE
// Crea un IIFE que calcule el área de un triángulo base 10 y altura 5, y lo muestre automáticamente en consola.

(function () {
  console.log((10 * 5) / 2);
})();

// --------- ejercicio 5 ---------
console.log("-- ejercicio 5 --");

//  5. Función que retorna un valor
// Crea una función convertirDolaresAEuros
// que reciba un monto en dólares y retorne su equivalente en euros (usa un valor ficticio como 1 dólar = 0.9 euros).

let convertirDolaresAEuros = function (monto) {
  return monto * 0.9;
};

console.log(convertirDolaresAEuros(1));

// --------- ejercicio 6 ---------
console.log("-- ejercicio 6 --");

// 6. Método de propiedad
// Crea un objeto reloj con una propiedad horaActual (un string tipo "10:00 AM") y
// un método tocarAlarma() que muestre: "¡Es hora de levantarse! Son las [horaActual]".

let reloj = {
  horaActual: "10:00 AM",
  tocarAlarma: function () {
    return "¡Es hora de levantarse! Son las" + this.horaActual;
  },
};

console.log(reloj.tocarAlarma());

// --------- ejercicio 7 ---------
console.log("-- ejercicio 7 --");

//  7. Arrow function
// Crea una arrow function llamada elevarAlCuadrado que reciba un número y retorne su cuadrado.

let elevarAlCuadrado = (num) => {
  return num * num;
};

console.log(elevarAlCuadrado(4));

// --------- ejercicio 8 ---------
console.log("-- ejercicio 8 --");

// 8. Bonus: this en funciones normales vs arrow
// Crea dos objetos auto1 y auto2, cada uno con una propiedad marca y un método mostrarMarca().
// En auto1, usa una función normal. En auto2, usa una arrow function.
// Llama a ambos métodos y observa qué pasa. ¿Cuál imprime correctamente la marca? ¿Por qué?

let auto1 = {
  marca: "BMW",
  mostrarMarca: function () {
    return this.marca;
  },
};

let auto2 = {
  marca: "Ford",
  mostrarMarca: () => {
    return this.marca;
  },
};

console.log(auto1.mostrarMarca());
console.log(auto2.mostrarMarca());

//¿Cuál imprime correctamente la marca?
//imprime correctamente la fucion normal solamente el de la funcion arrow imprime undefined

//¿Por qué?

// Porque la función normal respeta el contexto del objeto que la contiene,
// mientras que la arrow function no tiene su propio this y no puede acceder
// correctamente a las propiedades del objeto al que supuestamente pertenece.
