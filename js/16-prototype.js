// ===============================
// ¿Qué es un prototipo en JavaScript?
// ===============================

// En JavaScript, todos los objetos tienen una propiedad interna llamada [[Prototype]],
// que es una referencia a otro objeto (su prototipo). Este mecanismo permite la herencia
// de propiedades y métodos entre objetos.

// ===============================
// Ejemplo básico con función constructora + prototipo
// ===============================

function usuario(nombre) {
  this.nombre = nombre;
}

// Agregamos un método al prototipo de usuario
usuario.prototype.saludar = function () {
  console.log("Hola, soy " + this.nombre);
};

const persona1 = new usuario("Carlos");
const persona2 = new usuario("Ana");

persona1.saludar(); // Hola, soy Carlos
persona2.saludar(); // Hola, soy Ana

// Ventaja: El método saludar no se duplica en cada objeto creado,
// sino que todos comparten la misma función desde el prototipo.

// ===============================
// Cómo ver el prototipo de un objeto
// ===============================

console.log(Object.getPrototypeOf(persona1)); // Muestra el prototipo
console.log(persona1.__proto__); // También muestra el prototipo (no recomendado en producción)

// ===============================
// Diferencia entre método en constructor vs. en prototipo
// ===============================

function usuarioAvanzado(nombre) {
  this.nombre = nombre;

  // Cada objeto creado tendrá su propia copia de este método
  this.saludarIndividual = function () {
    console.log("Hola desde adentro");
  };
}

// Este método es compartido por todas las instancias
usuarioAvanzado.prototype.saludarCompartido = function () {
  console.log("Hola desde el prototipo");
};

const user = new usuarioAvanzado("Marta");
user.saludarIndividual(); // Hola desde adentro
user.saludarCompartido(); // Hola desde el prototipo

// ===============================
// Herencia prototípica manual
// ===============================

let animal = {
  hacerSonido() {
    console.log("Algún sonido");
  },
};

let perro = Object.create(animal); // Establece animal como prototipo de perro

perro.ladrar = function () {
  console.log("Guau!");
};

perro.hacerSonido(); // Algún sonido (heredado del prototipo)
perro.ladrar(); // Guau!

// ===============================
// hasOwnProperty() y la cadena de prototipos
// ===============================

console.log("--------hasOwnProperty()--------");

console.log(perro.hasOwnProperty("ladrar")); // true  → Propia del objeto
console.log(perro.hasOwnProperty("hacerSonido")); // false → Heredada del prototipo

// ===============================
// La propiedad .prototype vs __proto__
// ===============================

// .prototype → Es una propiedad de las funciones (constructoras o clases).
//              Define qué van a heredar las instancias creadas con new.

// __proto__   → Es una propiedad interna de los objetos que apunta al prototipo real
//               (al que se accede cuando se busca una propiedad no encontrada en el propio objeto).

function persona(nombre) {
  this.nombre = nombre;
}

// Método agregado al prototipo de persona
persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

const lucia = new persona("Lucía");

console.log(persona.prototype); // Objeto con métodos definidos en el prototipo
console.log(lucia.__proto__); // Referencia al prototipo de lucia (persona.prototype)

console.log(lucia.__proto__ === persona.prototype); // true

lucia.saludar(); // Hola, soy Lucía
