//- - - - - - - - - - - > Tipo de dato numero < - - - - - - - - - - -

// Un número en JavaScript puede ser entero o decimal (flotante):
let entero = 42;
let decimal = 3.14;
console.log(entero); // 42
console.log(decimal); // 3.14

// JavaScript usa el tipo "number" para ambos:
console.log(typeof entero); // "number"
console.log(typeof decimal); // "number"

// También existen valores especiales:
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("a" * 2); // NaN (Not a Number)

//- - - - - - - - - - - > OPERACIONES ARITMÉTICAS BÁSICAS < - - - - - - - - - - -
let a = 10;
let b = 3;

console.log(a + b); // Suma: 13
console.log(a - b); // Resta: 7
console.log(a * b); // Multiplicación: 30
console.log(a / b); // División: 3.333...
console.log(a % b); // Módulo (resto): 1

//- - - - - - - - - - - > MÉTODOS Y FUNCIONES DE NÚMEROS < - - - - - - - - - - -
let numero = 12.3456;

// .toFixed(n): redondea y muestra con n decimales (string)
console.log(numero.toFixed(2)); // "12.35"

// .toString(): convierte el número a texto
console.log(numero.toString()); // "12.3456"

// Math.round(): redondea al entero más cercano
console.log(Math.round(4.7)); // 5

// Math.floor(): redondea hacia abajo
console.log(Math.floor(4.9)); // 4

// Math.ceil(): redondea hacia arriba
console.log(Math.ceil(4.1)); // 5

// Math.random(): número aleatorio entre 0 y 1
console.log(Math.random());

// Math.max() y Math.min(): mayor y menor entre varios números
console.log(Math.max(1, 5, 9)); // 9
console.log(Math.min(1, 5, 9)); // 1

// Math.pow(base, exponente): potencia
console.log(Math.pow(2, 3)); // 8

// Math.sqrt(): raíz cuadrada
console.log(Math.sqrt(16)); // 4

//- - - - - - - - - - - > CARACTERÍSTICAS IMPORTANTES < - - - - - - - - - - -

// NaN significa "Not a Number", pero aún es de tipo "number"
let invalido = "texto" * 5;
console.log(invalido); // NaN
console.log(typeof invalido); // "number"

// Los números pueden escribirse en notación científica:
let grande = 1e6; // 1 millón
console.log(grande); // 1000000

// Precisión limitada en decimales:
console.log(0.1 + 0.2); // 0.30000000000000004

//- - - - - - - - - - - > EJERCICIOS DE PRÁCTICA < - - - - - - - - - - -
console.log(
  "------------------------Ejercicios de práctica:---------------------"
);
// Redondea un número decimal a 2 cifras decimales.
let numeroDec = 3.14159;
console.log(numeroDec.toFixed(2));

// Genera un número aleatorio entre 1 y 10.
let numeroAletorio = Math.floor(Math.random() * 10) + 1; //colocamos un floor para que salgan solo numeros enteros
console.log(numeroAletorio);

// Calcula el área de un círculo con un radio dado (usa Math.PI).
let radio = 5;
console.log(Math.PI * radio * radio); //formulara Math.PI * radio * radio

// Escribe un programa que diga si un número es par o impar.
let numeroParImpar = 7;
console.log(numeroParImpar % 2 === 0 ? "es par" : "es impar"); // se usa el operador % si da 0 es par de lo contrario es impar.

// Eleva un número a una potencia (por ejemplo, 5 elevado a 3).
console.log(Math.pow(5, 3));

// Encuentra el número mayor entre tres valores.

console.log(Math.max(5, 10.5, 100));

// Convierte un número a string y verifica su tipo.
let numeroAString = 12;
console.log(typeof numeroAString.toString());

// Usa una operación que devuelva NaN y comprueba si es NaN.
let numeroInvalido = "palabra" - 12;

console.log(numeroInvalido);
console.log(isNaN(numeroInvalido)); // true

// Multiplica dos decimales y muestra el resultado con 3 decimales.
let x = 2.5;
let y = 2.5;
let resul = x * y;
console.log(resul.toFixed(3));

// Calcula la raíz cuadrada de un número ingresado.

console.log(Math.sqrt(25));
