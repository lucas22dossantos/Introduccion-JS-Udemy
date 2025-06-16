// ===============================
// ¿Qué es la herencia en JavaScript?
// ===============================

// La herencia permite que una clase (hija) herede propiedades y métodos de otra clase (padre).
// Esto permite reutilizar código y organizarlo mejor.
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  sonido() {
    console.log("Hace un sonido genérico");
  }
}

// Clase Perro hereda de Animal
class Perro extends Animal {
  ladrar() {
    console.log("¡Guau!");
  }
}

const miPerro = new Perro("Max");

console.log(miPerro.nombre); // Max (heredado del constructor de Animal)
miPerro.sonido(); // Hace un sonido genérico (heredado)
miPerro.ladrar(); // ¡Guau! (propio de Perro)

// ===============================
// extends y super()
// ===============================
console.log("----- extends y super() -----");
// extends → Indica que una clase hereda de otra.

// super() → Se usa en el constructor de la clase hija para llamar al constructor del padre.

class Gato extends Animal {
  constructor(nombre, color) {
    super(nombre); // Llama al constructor de Animal
    this.color = color;
  }

  sonido() {
    super.sonido(); // Llama al método del padre
    console.log("¡Miau!");
  }
}

const gatito = new Gato("Michi", "blanco");
console.log(gatito.nombre);
console.log(gatito.color);
gatito.sonido();

// ===============================
// ejercicio 1
// ===============================

console.log("=========== Ejercicio 1 ===========");

// Crea una clase Vehiculo con propiedades marca y modelo y un método info() que muestre ambos.

// Luego crea una clase Auto que herede de Vehiculo y agregue una propiedad puertas.

// Agrega un método infoCompleta() en Auto que use super.info() y luego muestre las puertas.

class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  info() {
    console.log(`Marca:  ${this.marca}`);
    console.log(`Modelo:  ${this.modelo}`);
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, puertas) {
    super(marca, modelo);
    this.puertas = puertas;
  }

  infoCompleta() {
    super.info();
    console.log(`Puertas:  ${this.puertas}`);
  }
}

let autoMovil = new Auto("Fiat", "Uno", 4);
autoMovil.infoCompleta();

// ===============================
// ejercicio 2
// ===============================

console.log("=========== Ejercicio 2 ===========");

// Crea una clase Usuario con nombre y email.

// Crea una clase Admin que herede de Usuario y agregue un nivel de acceso.

// Agrega un método mostrarInfo() que muestre todos los datos (usando super para el nombre y email).

class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  mostrarInfo() {
    return `Nombre: ${this.nombre}, Email: ${this.email}`;
  }
}

class Admin extends Usuario {
  constructor(nombre, email, nivel) {
    super(nombre, email);
    this.nivel = nivel;
  }

  mostrarInfo() {
    const baseInfo = super.mostrarInfo();
    console.log(`${baseInfo}, Nivel de acceso: ${this.nivel}`);
  }
}

const nuevoAdmin = new Admin("Lucas", "correo@gmail.com", "superadmin");
nuevoAdmin.mostrarInfo();

// ===============================
// ejercicio 3
// ===============================

console.log("=========== Ejercicio 3 ===========");
// Crea una clase Figura con un método calcularArea() que solo diga "Área genérica".

// Crea una clase Cuadrado que herede de Figura y sobrescriba calcularArea() para devolver lado * lado.

class Figura {
  calcularArea() {
    console.log("Área genérica");
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    const area = this.lado * this.lado;
    console.log(`El área del cuadrado es: ${area}`);
  }
}

const fig = new Figura();
fig.calcularArea(); // Área genérica

const cuadrado = new Cuadrado(4);
cuadrado.calcularArea();

// ===============================
// ejercicio 4
// ===============================

console.log("=========== Ejercicio 4 ===========");

// Crea una clase Persona con nombre y edad, y un método saludar().

// Crea una clase Empleado que herede de Persona y agregue sueldo.

// Agrega un getter llamado datosCompletos que devuelva: "Juan, 30 años, gana $50000".

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
}

class Empleado extends Persona {
  constructor(nombre, edad, sueldo) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }

  get datosCompletos() {
    return `${this.nombre}, ${this.edad} años, gana $${this.sueldo}`;
  }
}

const nombreEmpleado = new Empleado("Juan", 30, 50000);

nombreEmpleado.saludar();
console.log(nombreEmpleado.datosCompletos);

// ===============================
// ejercicio 5
// ===============================

console.log("=========== Ejercicio 5 ===========");

// Crea una clase Producto con nombre y precio.

// Crea una clase ProductoConDescuento que herede de Producto y tenga una propiedad descuento (en %).

// Agrega un método precioFinal() que calcule el precio con el descuento aplicado.

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class productoConDescuento extends Producto {
  constructor(nombre, precio, descuento) {
    super(nombre, precio);
    this.descuento = descuento;
  }

  precioFinal() {
    let precioConDescuento = this.precio * (1 - this.descuento / 100);
    console.log(`Precio final de ${this.nombre}: $${precioConDescuento}`);
    return precioConDescuento;
  }
}

const producto1 = new productoConDescuento("Harina", 1000, 10);
producto1.precioFinal();
