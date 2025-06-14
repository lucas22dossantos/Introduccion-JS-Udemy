// ===============================
// Objetos Literales
// ===============================
// Un objeto literal es la forma más simple de crear un objeto en JavaScript. Se define directamente con llaves

const persona = {
  nombre: "Lucía",
  edad: 25,
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

persona.saludar(); // Hola, soy Lucía

// Ventaja: Rápido y simple para objetos únicos.
// Desventaja: No sirve para crear múltiples objetos con la misma estructura.

// ===============================
// Función Constructora
// ===============================
// Una función constructora permite crear múltiples objetos con la misma estructura. Se usa con new.

function usuario(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`);
  };
}

const persona1 = new usuario("Carlos", 30);
const persona2 = new usuario("Ana", 28);

persona1.saludar(); // Hola, soy Carlos
persona2.saludar(); // Hola, soy Ana

// Ventaja: Permite crear muchos objetos parecidos.
// Desventaja: Cada objeto tiene su propia copia de los métodos (no ideal en términos de memoria).
