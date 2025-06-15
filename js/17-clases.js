// ===============================
// ¿Qué es una clase en JavaScript?
// ===============================

// Una clase es una plantilla para crear objetos. Define propiedades y
// métodos comunes a todas las instancias que se creen con ella.
class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona1 = new persona("Lucía", 25); // <- Se usa new para crear una instancia.
persona1.saludar(); // Hola, soy Lucía y tengo 25 años

// class define la clase.

// constructor se ejecuta al crear una nueva instancia.

// Los métodos se definen sin la palabra function.

// ===============================
// Agregar métodos dentro de la clase
// ===============================
console.log("----- metodos en clases -----");
// Los métodos que defines dentro de una clase se agregan al prototipo automáticamente, compartidos por todas las instancias.
class animal {
  constructor(tipo) {
    this.tipo = tipo;
  }

  hacerSonido() {
    console.log("¡Hace algún sonido!");
  }
}

const perro = new animal("Perro");
perro.hacerSonido(); // ¡Hace algún sonido!

// ===============================
// Getters y Setters
// ===============================
console.log("----- Getters y Setters -----");
// Sirven para acceder o modificar propiedades de forma controlada.
class Usuario {
  constructor(nombre) {
    this._nombre = nombre; // por convención, se usa _
  }

  get nombre() {
    return this._nombre.toUpperCase(); //Convierte todo el texto a mayúsculas.
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre.trim(); //Elimina los espacios en blanco al inicio y al final de una cadena.
  }
}

const user = new Usuario("lucía");
console.log(user.nombre); // LUCÍA

user.nombre = "  ana  ";
console.log(user.nombre); // ANA

// ===============================
// Propiedades estáticas (static)
// ===============================
console.log("----- (static) -----");

// No pertenecen a una instancia, sino a la clase misma.

class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Calculadora.sumar(4, 5)); // 9
// No podés usar this de la instancia dentro de un método static.

// ===============================
//Ejercicios 1
// ===============================

console.log("----- ejercicio 1 -----");

// Crea una clase llamada Libro que tenga las propiedades titulo y autor.
// Agrega un método describir() que muestre: "El libro [titulo] fue escrito por [autor]".

class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  describir() {
    console.log(`El libro ${this.titulo} fue escrito por ${this.autor}`);
  }
}

const libro1 = new Libro("1984", "George Orwell");
libro1.describir();

// ===============================
//Ejercicios 2
// ===============================
console.log("----- ejercicio 2 -----");
// Crea una clase Contador que tenga una propiedad valor.
// Agrega métodos incrementar() y resetear().

class Contador {
  constructor(valor) {
    this.valor = valor;
  }

  incrementar() {
    this.valor += 1;
    return this.valor;
  }

  resetear() {
    this.valor = 0;
    return this.valor;
  }
}

const contador = new Contador(2);

console.log(contador.incrementar());
console.log(contador.incrementar());
console.log(contador.resetear());

// ===============================
//Ejercicios 3
// ===============================
console.log("----- ejercicio 3 -----");

// Crea una clase Producto con una propiedad privada _nombre.
// Usa un getter para devolver el nombre en mayúsculas y un setter para quitar espacios.

class Producto {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre.toUpperCase();
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre.trim();
  }
}

const p = new Producto("  mesa  ");
console.log(p.nombre); // MESA
p.nombre = "  silla ";
console.log(p.nombre); // SILLA

// ===============================
//Ejercicios 4
// ===============================
console.log("----- ejercicio 4 -----");

// Crea una clase Utilidades con un método estático llamado esPar(n) que devuelva true si el número es par.

class Utilidades {
  static esPar(n) {
    return n % 2 === 0;
  }
}

console.log(Utilidades.esPar(4));
console.log(Utilidades.esPar(7));
