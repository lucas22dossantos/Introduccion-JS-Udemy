//- - - - - - - - - - - > ¿QUÉ ES UN OBJETO EN JAVASCRIPT? < - - - - - - - - - - -

//Un objeto es una colección de datos relacionados y/o funcionalidades (métodos) representados mediante pares clave: valor.

let persona = {
  nombre: "Lucas",
  edad: 25,
  esEstudiante: true,
};

console.log(persona); // Muestra todo el objeto
console.log(persona.nombre); // "Lucas"

//- - - - - - - - - - - > PODEMOS MODIFICAR, AÑADIR Y ELIMINAR PROPIEDADES < - - - - - - - - - - -

persona.edad = 52; // Modificar
persona.pais = "Argentina"; // Añadir
delete persona.esEstudiante; // Eliminar

console.log(persona);

//- - - - - - - - - - - > MÉTODOS EN OBJETOS < - - - - - - - - - - -
//Los métodos son funciones que viven dentro de un objeto.

let coche = {
  marca: "Toyota",
  arrancar: function () {
    console.log("El coche está arrancando");
  },

  apagar() {
    console.log("El coche se está apagando");
  }, // Método abreviado
  // También se puede definir un método sin la palabra 'function'
};

coche.apagar(); // Llama al método

//- - - - - - - - - - - > ¿COMO RECORRER UN OBJETO? < - - - - - - - - - - -
console.log(
  "------------------------Recorriendo un objeto:---------------------"
);
let usuario = {
  nombre: "Ana",
  edad: 25,
  pais: "España",
};

for (let clave in usuario) {
  console.log(clave + ": " + usuario[clave]);
}

//- - - - - - - - - - - > OBJETOS ANIDADOS < - - - - - - - - - - -
console.log("------------------------Objetos anidados:---------------------");
//podemos tener objetos dentro de otros objetos, lo que nos permite organizar mejor la información.

let libro = {
  titulo: "El Quijote",
  autor: {
    nombre: "Miguel",
    apellido: "de Cervantes",
  },
};

console.log(libro.autor.nombre); // "Miguel"

//- - - - - - - - - - - >  ¿Qué es destructuring en JavaScript? < - - - - - - - - - - -
//El destructuring (o desestructuración) es una forma rápida de extraer valores de objetos o arrays y asignarlos a variables de forma directa y concisa.

console.log(
  "------------------------ EJ de destructuring ---------------------"
);
let personaEjemplo = {
  nombres: "Lucas",
  edad: 30,
  pais: "Argentina",
};

// Destructuring
let { nombres, edad } = personaEjemplo;

console.log(nombres); // "Lucas"
console.log(edad); // 30

//- - - - - - - - - - - > PARA COMPROBAR DE QUE PROPIEDAD EXISTE < - - - - - - - - - - -
console.log(
  "------------------------ ¿Existe la propiedad nombre en el objeto persona? ---------------------"
);

console.log("nombre" in persona); // true

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -> METODOS DE LOS OBJETOS < - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//Estos métodos los proporciona Object, la clase base de todos los objetos en JS.

// --- Object.keys(obj)
//Devuelve un array con todas las claves (propiedades) del objeto.
let persona3 = { nombre: "Lucas", edad: 30 };
console.log(Object.keys(persona3)); // ["nombre", "edad"]

// --- Object.values(obj)
// Devuelve un array con los valores del objeto.
console.log(Object.values(persona3)); // ["Lucas", 30]

// --- Object.entries(obj)
// Devuelve un array de arrays con pares [clave, valor].
console.log(Object.entries(persona3)); // [["nombre", "Lucas"], ["edad", 30]]

// --- Object.assign(destino, origen)
// Copia las propiedades de un objeto a otro (muy usado para clonar o fusionar objetos).
let copia = Object.assign({}, persona3);
console.log(copia); // { nombre: "Lucas", edad: 30 }

// --- Object.hasOwnProperty(prop)
// Verifica si una propiedad es propiedad directa del objeto (no heredada).
console.log(persona3.hasOwnProperty("nombre")); // true

// --- Object.freeze(obj)
// Evita que un objeto sea modificado (no se pueden agregar, cambiar ni eliminar propiedades).

Object.freeze(persona3);
persona.edad = 40; // No hace nada
console.log(persona.edad); // 30

// --- Object.seal(obj)
// Evita agregar o eliminar propiedades, pero sí permite modificar valores existentes.

Object.seal(persona3);
persona3.edad = 35; // Sí se modifica
delete persona3.nombre; // No se elimina

//- - - - - - - - - - - > Métodos personalizados (definidos por ti) < - - - - - - - - - - -
// Puedes definir funciones dentro del objeto, y entonces esas funciones se llaman métodos del objeto.

let usuario2 = {
  nombre: "Ana",
  saludar() {
    console.log("Hola " + this.nombre);
  },
};

usuario2.saludar(); // "Hola Ana"

//- - - - - - - - - - - > ¿QUE ES EL SPREAD OPERATOR EN OBJETOS? < - - - - - - - - - - -

// El Spread Operator (...) se usa para copiar o combinar objetos de forma rápida y limpia.

// Esto crea una copia superficial del objeto persona.
let persona4 = {
  nombre: "Ana",
  edad: 28,
};

let copia2 = { ...persona4 };

console.log(copia2); // { nombre: "Ana", edad: 28 }

//- - - - - - - - - - - > ¿PARA QUE SE USA? < - - - - - - - - - - -
// --- Copiar objetos
let original = { a: 1, b: 2 };
let copia4 = { ...original };

console.log(copia4); // { a: 1, b: 2 }

// --- Combinar (fusionar) objetos
let info = { nombre: "Lucas" };
let contacto = { telefono: "123456" };

let persona5 = { ...info, ...contacto };

console.log(persona5); // { nombre: "Lucas", telefono: "123456" }

// --- Sobrescribir propiedades
// Si dos objetos tienen la misma clave, la que está más a la derecha gana

let base = { nombre: "Ana", edad: 25 };
let actualizacion = { edad: 30 };

let resultado = { ...base, ...actualizacion };

console.log(resultado); // { nombre: "Ana", edad: 30 }

//  ---- No copia objetos anidados profundamente (solo copia superficial):

let obj = { datos: { edad: 30 } };
let copia6 = { ...obj };

copia6.datos.edad = 99;
console.log(obj.datos.edad);

//- - - - - - - - - - - > EJERCICIOS < - - - - - - - - - - -
console.log(
  "------------------------- Ejercicios de práctica 1: ---------------------"
);
// 1. Crear y modificar objetos
// Declara un objeto auto con las propiedades: marca, modelo y año.

// Cambia el valor de modelo.

// Añade una propiedad nueva llamada color.

// Elimina la propiedad año.

// Muestra el objeto en consola después de cada cambio.

let auto = {
  marca: "Ford",
  modelo: "Fiesta",
  año: 2020,
};
console.log(auto); // Muestra el objeto auto inicial

auto.modelo = "Focus"; //cambiamos el model.
console.log(auto);

auto.color = "Negro"; //añadimos una nueva propiedad llamado color.
console.log(auto);

delete auto.año; //eliminamos la propiedad año.

console.log(auto);

// 2. Métodos en objetos
// Crea un objeto reloj con una propiedad hora (por ejemplo: "10:00") y un método llamado mostrarHora que imprima la hora en consola.

// Llama al método para que muestre la hora.

// Añade otro método abreviado que muestre "El reloj está funcionando".
console.log(
  "------------------------- Ejercicios de práctica 2: ---------------------"
);

let reloj = {
  hora: "10:00",
  mostrarHora() {
    console.log("La hora es: " + this.hora);
  },

  mostrarEstado() {
    console.log("El reloj está funcionando");
  },
};

reloj.mostrarHora(); // Muestra la hora
reloj.mostrarEstado(); // Muestra el estado del reloj

// 3. Recorrer objetos
// Declara un objeto pelicula con propiedades: titulo, director, año.

// Usa un for...in para imprimir en consola todas las claves y valores del objeto en el formato: "clave: valor".
console.log(
  "------------------------- Ejercicios de práctica 3: ---------------------"
);

let pelicula = {
  titulo: "La Maldición de la Perla Negra",
  director: " Gore Verbinski",
  año: 2003,
};

for (let i in pelicula) {
  console.log(i + ": " + pelicula[i]);
}

// 4. Objetos anidados
// Declara un objeto universidad con la propiedad nombre y otra propiedad direccion que sea otro objeto con las propiedades: calle, ciudad y pais.

// Accede y muestra en consola el nombre de la ciudad.

console.log(
  "------------------------- Ejercicios de práctica 4: ---------------------"
);

let universidad = {
  nombre: " Universidad de Springfield",
  direccion: {
    calle: "Av. Siempre Viva",
    ciudad: "Springfield",
    pais: "USA",
  },
};

console.log("ciudad: " + universidad.direccion.ciudad); // Muestra "Springfield"

// 5. Destructuring
// Dado el objeto persona: let persona = { nombre: "Marta", edad: 40, ciudad: "Madrid" };
// Usa destructuring para extraer las propiedades nombre y ciudad y mostrarlas por consola.

console.log(
  "------------------------- Ejercicios de práctica 5: ---------------------"
);

let personax = { nombre: "Marta", edad: 40, ciudad: "Madrid" };

let { nombre, ciudad } = personax;

console.log("Nombre: " + nombre); // Muestra "Marta");
console.log("Ciudad: " + ciudad); // Muestra "Madrid"

// 6. Comprobar existencia de propiedad
// Usando el objeto persona anterior, verifica si la propiedad "edad" existe en el objeto (usando el operador in) y muestra el resultado en consola.
console.log(
  "------------------------- Ejercicios de práctica 6: ---------------------"
);

console.log("edad" in personax);

// 7. Métodos útiles de Object
// Dado un objeto usuario: let usuario = { nombre: "Carlos", edad: 28, activo: true };

// Usa Object.keys() para mostrar las claves.

// Usa Object.values() para mostrar los valores.

// Usa Object.entries() para mostrar los pares [clave, valor].

// Usa Object.hasOwnProperty() para comprobar si tiene la propiedad activo.

console.log(
  "------------------------- Ejercicios de práctica 7: ---------------------"
);

let usuariox = { nombre: "Carlos", edad: 28, activo: true };

console.log(Object.keys(usuariox)); // Muestra las claves: ["nombre", "edad", "activo"]

console.log(Object.values(usuariox));

console.log(Object.entries(usuariox));

console.log(usuariox.hasOwnProperty("activo"));

// 8. Clonación y Spread Operator
// // Dado el objeto: let original = { a: 1, b: 2 };
// Haz una copia usando el spread operator.

// Modifica una propiedad en la copia y muestra que el original no cambió.

// Combina dos objetos usando spread (por ejemplo, info = { nombre: "Ana" } y contacto = { email: "ana@mail.com" }).
console.log(
  "------------------------- Ejercicios de práctica 8: ---------------------"
);

let originalx = { a: 1, b: 2 };

let copiax = { ...originalx };

copiax.b = 12;

console.log(originalx);

let infor = { nombre: "Ana" };
let contactos = { email: "ana@mail.com" };

let combinacion = { ...infor, ...contactos };
console.log(combinacion);

// 9. Crear método personalizado con this
// Crea un objeto persona con las propiedades nombre y apellido.

// Añade un método nombreCompleto que devuelva el nombre completo concatenando nombre y apellido.

// Muestra en consola el resultado de llamar a persona.nombreCompleto().

console.log(
  "------------------------- Ejercicios de práctica 9: ---------------------"
);

let personass = {
  Nombre: "Lucas",
  Apellido: "Dos Santos",

  nombreCompleto() {
    console.log(this.Nombre + " " + this.Apellido);
  },
};

personass.nombreCompleto();
