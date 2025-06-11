// ===============================
//¿Qué es .this en JavaScript?
// ===============================
// .this es una palabra clave que hace referencia al contexto de ejecución actual,
// es decir, al objeto que está ejecutando la función. Su valor cambia dependiendo de cómo se llame la función.

//Casos comunes de uso de .this
// ===============================
//  Dentro de un objeto
// ===============================
// Cuando usás .this dentro de un método de un objeto, hace referencia a ese objeto:
const persona = {
  nombre: "Lucas",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};

persona.saludar();
//En este caso, this.nombre es igual a persona.nombre

// ===============================
// En una función global
// ===============================

// En una función común (fuera de un objeto), this apunta a:

//- window en el navegador

//- global en Node.js

function mostrar() {
  console.log(this);
}

mostrar(); // En el navegador: Window
// ===============================
//  Con arrow functions
// ===============================

// Las arrow functions no tienen su propio this. Toman el this del contexto exterior donde fueron creadas.

const usuario = {
  nombre: "Ana",
  saludar: () => {
    console.log("Hola, soy " + this.nombre);
  },
};

persona.saludar(); // Hola, soy Lucas

//En este caso, this no apunta a usuario sino al entorno global (que en este caso es persona que esta mas arriba).
// Por eso no se recomienda usar arrow functions como métodos en objetos si necesitás usar .this.

// ===============================
// Usando .bind(), .call() y .apply()
// ===============================

// Podés cambiar el valor de .this manualmente.

function saludar() {
  console.log("Hola, soy " + this.nombre);
}

const user = { nombre: "Lucía" };

// .call()
// Ejecuta la función inmediatamente, y los argumentos se pasan uno por uno.

saludar.call(user); // Hola, soy Lucía

// .apply()
// Ejecuta la función inmediatamente, pero los argumentos se pasan como un array
saludar.apply(persona, ["Buenas", "😊"]); // Buenas, soy María 😊

// .bind()
// NO ejecuta la función de inmediato, sino que devuelve una nueva función con this ya ligado (fijo).
const saludarMaria = saludar.bind(persona, "Qué tal", "🌟");
saludarMaria(); // Qué tal, soy María 🌟

// ===============================
// EJERCICIOS
// ===============================
console.log("---- ejercicio 1 ----");
// ===============================
// Ejercicio 1: .this en un método de un objeto
// ===============================

// Crea un objeto auto con propiedades marca y modelo y un método mostrarAuto que imprima en consola:
// "Este auto es una [marca] [modelo]" usando this.

let auto = {
  marca: "Ford",
  modelo: "Focus",
  mostrarAuto: function () {
    console.log(`Este auto es una ${this.marca}, ${this.modelo}`);
  },
};

auto.mostrarAuto();

// ===============================
// Ejercicio 2: .this en función global
// ===============================
console.log("---- ejercicio 2 ----");
// Crea una función llamada mostrarThis que simplemente imprima el valor de this en consola.
// Ejecutala en navegador y observa qué imprime (debería ser el objeto global window).

function mostrarThis() {
  console.log(this);
}
mostrarThis();

// ===============================
// Ejercicio 3: .this en arrow function dentro de un objeto
// ===============================

console.log("---- ejercicio 3 ----");
// Crea un objeto nombrePersona con propiedad nombre y un método decirNombre como arrow function que imprima this.nombre.
// Ejecuta el método y explica por qué no imprime el nombre esperado.

const nombrePersona = {
  nombre: "Lucas",
  decirNombre: () => {
    console.log(this.nombre);
  },
};

nombrePersona.decirNombre(); //Da undefined por que this no apunta a nombrePersona sino al entorno global.

// ===============================
// Ejercicio 4: Uso de .call()
// ===============================
console.log("---- ejercicio 4 ----");

// Define una función presentarse que imprima "Hola, soy " + this.nombre.
// Crea dos objetos con nombre diferentes, y usa .call() para llamar presentarse con cada objeto como contexto.

function presentarse() {
  console.log("Hola soy" + this.nombre);
}

let primerNombre = { nombre: " Lucas" };
let segundoNombre = { nombre: " Emanuel" };

presentarse.call(primerNombre);
presentarse.call(segundoNombre);

// ===============================
// Ejercicio 5: Uso de .apply() con argumentos
// ===============================
console.log("---- ejercicio 5 ----");
// Modifica la función del ejercicio anterior para que reciba dos parámetros: saludo y emoji.
// Que imprima: ${saludo}, soy ${this.nombre} ${emoji}
// Usa .apply() para llamar la función con un objeto y pasar un arreglo con saludo y emoji.

function presentarseConParametros(saludo, emoji) {
  console.log(`${saludo}` + "soy " + `${this.nombre}` + ` ${emoji}`);
}

let tercerNombre = { nombre: "Valeria" };

presentarseConParametros.apply(tercerNombre, ["Hola", "😊"]);
