//- - - - - - - - - - - > ¿QUÉ ES UN BOOLEAN? < - - - - - - - - - - -
//Un booleano representa solo dos valores posibles: true (verdadero) o false (falso).
let esVerdadero = true;
let esFalso = false;

console.log(typeof esVerdadero); // "boolean"

//- - - - - - - - - - - > COMPARACIONES QUE DEVUELVEN BOOLEANOS < - - - - - - - - - - -
let a = 10;
let b = 5;

console.log(a > b); // true
console.log(a < b); // false
console.log(a === 10); // true
console.log(b !== 5); // false

//- - - - - - - - - - - > OPERACIONES LÓGICAS < - - - - - - - - - - -
let x = true;
let y = false;

console.log(x && y); // false (AND - ambas deben ser true)
console.log(x || y); // true  (OR - al menos una debe ser true)
console.log(!x); // false (NOT - invierte el valor)

//- - - - - - - - - - - > OPERACIONES LÓGICAS < - - - - - - - - - - -
//Cualquier valor en JavaScript puede convertirse a booleano usando Boolean(valor)
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false (cadena vacía)
console.log(Boolean("hola")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean([])); // true (ojo con esto)
console.log(Boolean({})); // true

//- - - - - - - - - - - >  EJERCICIOS DE PRÁCTICA < - - - - - - - - - - -
console.log(
  "------------------------Ejercicios de práctica:---------------------"
);
// Declara dos variables booleanas y usa los operadores &&, || y ! con ellas.
let num1 = 10;
let num2 = 15;

console.log(num1 > 5 && num2 > 5);
console.log(num1 < 1 || num2 < 1);
console.log(!(num1 === num2));

// Escribe una comparación que sea true y otra que sea false.
console.log(100 > 99);
console.log(1 === "1");

// Usa Boolean() para convertir diferentes valores (0, "", "hola", [], {}) y muestra sus resultados.
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean({}));

// Comprueba si una variable edad es mayor o igual a 18 (mayoría de edad).
let edad = 19;
console.log(edad >= 18);

// Declara una cadena vacía y verifica si es "falsy" usando Boolean().

let cadenaVacia = "";
console.log(Boolean(cadenaVacia));

// Evalúa si un número está en un rango entre 10 y 50.
let rango = 30;
console.log(rango >= 10 && rango <= 50 ? "esta en rango" : "no esta en rango");

// Usa una condición lógica para verificar si un número NO es divisible por 3.

let numero = 9;
console.log(numero % 3 !== 0 ? "NO es divisible por 3" : "es divisible por 3");

// Usa una expresión que combine comparación y lógica:
// edad > 18 && tieneLicencia === true
let mayorEdad = 20;
let tieneLicencia = true;
console.log(mayorEdad > 18 && tieneLicencia === true);

// Convierte el resultado de una operación matemática a booleano.
console.log(Boolean(10 * 10));

// Crea una función que reciba un número y devuelva true si es par.

let par = 10;

function esPar(par) {
  return par % 2 === 0;
}
console.log(esPar(par) ? "Es par" : "Es impar");
