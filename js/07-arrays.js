//- - - - - - - - - - - > ¿QUÉ ES UN ARRAY? < - - - - - - - - - - -
//Un array es una colección ordenada de elementos. Puedes guardar múltiples valores (números, cadenas, booleanos, objetos, etc.) en una sola variable.

//table es una función de console que muestra los datos en una tabla en la consola, lo que facilita la visualización de los elementos del array.

let listaFrutas = ["manzana", "banana", "pera"];
console.table(listaFrutas); // Muestra la tabla
console.table(listaFrutas[0]); // "manzana"

// LOS ARRAYS PUEDEN TENER DISTINTOS TIPOS DE DATOS EN SU INTERIOR
let listaNumeros = [10, 20, 30, 40];
let datosMezclados = ["texto", 123, true, null];

console.table(listaNumeros);
console.table(datosMezclados);

//- - - - - - - - - - - > RECORRER UN ARRAY < - - - - - - - - - - -

let nombresPersonas = ["Ana", "Juan", "Carlos"];

// con length obtenemos la cantidad de elementos
for (let i = 0; i < nombresPersonas.length; i++) {
  console.log(nombresPersonas[i]);
}

// También con for...of
for (let nombre of nombresPersonas) {
  console.log(nombre);
}

//- - - - - - - - - - - > ¿QUÉ ES FOREACH? < - - - - - - - - - - -

// forEach es un método de los arrays que ejecuta una función una vez por cada elemento del array, sin devolver nada (es decir, no retorna un nuevo array).

// array.forEach(function(elemento, índice, array) {
//   // Código que se ejecuta por cada elemento
// });

// elemento: el valor actual del array.

// índice (opcional): el índice del elemento actual.

// array (opcional): el array completo.

console.log("---Recorriendo con forEach---");
listaFrutas.forEach(function (fruta, indice) {
  console.log(indice + ": " + fruta);
});

//- - - - - - - - - - - > MÉTODOS COMUNES EN ARRAYS < - - - - - - - - - - -

// | Método               | Qué hace                                                 |
// | -------------------- | -------------------------------------------------------- |
// | `.push()`            | Añade al final                                           |
// | `.pop()`             | Elimina el último elemento                               |
// | `.shift()`           | Elimina el primer elemento                               |
// | `.unshift()`         | Añade al inicio                                          |
// | `.length`            | Devuelve la cantidad de elementos                        |
// | `.indexOf(valor)`    | Devuelve el índice de un valor (o -1 si no está)         |
// | `.includes(valor)`   | Devuelve `true` o `false` si está o no en el array       |
// | `.join("separador")` | Une los elementos en una cadena                          |
// | `.slice()`           | Corta una parte del array (no modifica el original)      |
// | `.splice()`          | Añade, elimina o reemplaza elementos (modifica original) |

//- - - - - - - - - - - > AGREGAR ELEMENTOS < - - - - - - - - - - -

// Añadir un elemento al final del array
listaFrutas.push("Kiwi");
console.table(listaFrutas);

// Añadir un elemento al inicio del array
listaFrutas.unshift("Fresa");
console.table(listaFrutas);

//- - - - - - - - - - - > ELIMINAR ELEMENTOS < - - - - - - - - - - -

// Eliminar el último elemento del array
listaFrutas.pop();
console.table(listaFrutas);

// Eliminar el primer elemento del array
listaFrutas.shift();
console.table(listaFrutas);

//podemos agregar o quitar elementos en cualquier parte del array con splice

// su sintaxis es:
// array.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...)

// inicio: El índice donde empieza la modificación.

// cantidadAEliminar: Cuántos elementos se eliminan desde esa posición.

// elemento1, elemento2...: Lo que quieres insertar.

let numerosSecuencia = [1, 2, 3, 4, 5];
// Quitar el elemento en el índice 2 (el 3)
numerosSecuencia.splice(2, 1);
console.log(numerosSecuencia);

// Insertar en el índice 2 sin eliminar
numerosSecuencia.splice(2, 0, 99);
console.table(numerosSecuencia);

// El método includes() verifica si un array contiene un determinado valor. Devuelve: true si el valor está en el array. false si no está.

//sintaxis: array.includes(valorBuscado, desdeIndice);

// valorBuscado: El valor que quieres encontrar.

// desdeIndice (opcional): Desde qué índice del array empezar a buscar (por defecto es 0).

let frutasParaBuscar = ["manzana", "banana", "naranja"];
console.log(frutasParaBuscar.includes("banana")); // true
console.log(frutasParaBuscar.includes("pera")); // false

//- - - - - - - - - - - > ¿ QUÉ ES .SOME()? < - - - - - - - - - - -

// El método some() verifica si al menos un elemento del array cumple una condición (es decir, que devuelva true en una función).

// Si algún elemento pasa la prueba → devuelve true.
// Si ninguno la pasa → devuelve false.
// sintaxis :
// array.some(function(elemento, índice, array) {
// condición que debe cumplir al menos uno
//});

// elemento: el elemento actual del array.

// índice (opcional): la posición del elemento actual.

// array (opcional): el array completo.

//Esto me sirve para verificar si al menos un elemento cumple una condición específica.
// como por ej en un array con objetos dentro ya que con include esto no se puede hacer.

let listaUsuarios = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Lucas", edad: 25 },
  { nombre: "Sofía", edad: 22 },
];

let contieneLucas = listaUsuarios.some((usuario) => usuario.nombre === "Lucas");
console.log(contieneLucas);

//- - - - - - - - - - - > ¿ QUÉ ES .REDUCE()? < - - - - - - - - - - -
console.log("---Ejemplo de reduce---");
// El método .reduce() en JavaScript sirve para reducir un array a un solo valor (puede ser un número,
// una cadena, un objeto, etc.), aplicando una función a cada elemento y acumulando el resultado.

//sintaxis:
// array.reduce((acumulador, valorActual) => {
//   // lógica
//   return nuevoValorAcumulado;
// }, valorInicial);

// acumulador: guarda el resultado de la función en cada iteración.

// valorActual: el valor actual del array en esa iteración.

// valorInicial: (opcional) el valor con el que comienza el acumulador.

// Ejemplo 1: Sumar todos los números de un array

let numerosReducir = [1, 2, 3, 4, 5];

let sumaTotal = numerosReducir.reduce((acum, actual) => acum + actual, 0);
console.log(sumaTotal);

// En la 1.ª iteración: acumulador = 0, actual = 1 → retorna 1

// 2.ª iteración: acumulador = 1, actual = 2 → retorna 3

// Y así hasta sumar todo

// Ejemplo 2: Contar cuántas veces aparece cada palabra

let palabrasRepetidas = ["perro", "gato", "perro", "loro", "gato", "perro"];
let contadorPalabras = palabrasRepetidas.reduce((acum, palabra) => {
  acum[palabra] = (acum[palabra] || 0) + 1;
  return acum;
}, {});
console.log(contadorPalabras);

//- - - - - - - - - - - > ¿ QUÉ ES .FILTER()? < - - - - - - - - - - -
console.log("---Ejemplo de filter---");

// .filter() crea un nuevo array con los elementos que cumplan una condición (es decir, para los que la función de prueba devuelve true)

//Sintaxis:
// array.filter((elemento, índice, array) => {
//   return condición;
// });

//Ejemplo:

let listaEnteros = [1, 2, 3, 4, 5, 6];
let numerosFiltrados = listaEnteros.filter((n) => n % 2 === 0);
console.log(numerosFiltrados);

//Ejemplo con objetos:

let usuariosFiltrados = [
  { nombre: "Ana", activo: true },
  { nombre: "Luis", activo: false },
  { nombre: "Carla", activo: true },
];

let usuariosActivos = usuariosFiltrados.filter((usuario) => usuario.activo);
console.log(usuariosActivos);

// Usa .filter() cuando necesitas filtrar los elementos de un array, es decir:

// Obtener solo los que cumplan cierta condición

// Eliminar los que no interesan

// Trabajar con listas sin modificar el array original

//- - - - - - - - - - - > ¿ QUÉ ES .MAP? < - - - - - - - - - - -

// .map() es un método de los arrays que crea un nuevo array aplicando una función a cada elemento del array original.

//  No modifica el array original. Devuelve uno nuevo.

// Sintaxis:
// let nuevoArray = arrayOriginal.map(function(elemento, índice, array) {
//   // retornar el nuevo valor
// });

// elemento: el valor actual del array.

// índice (opcional): posición del elemento.

// array (opcional): el array completo.

let numerosOriginales = [1, 2, 3, 4];
let numerosDuplicados = numerosOriginales.map((n) => n * 2);
console.log(numerosDuplicados);

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIOS < - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 1: Agregar y eliminar ---");

// Crea un array llamado animales con los valores: "perro", "gato", "loro".

// Agrega "conejo" al final del array.

// Agrega "pez" al inicio del array.

// Elimina el último elemento.

// Muestra el array final usando console.table().

let listaAnimales = ["perro", "gato", "loro"];
listaAnimales.push("conejo");
listaAnimales.unshift("pez");
listaAnimales.pop();
console.table(listaAnimales);

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 2< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 2: Buscar elementos ---");

// Dado el array: let listaColores = ["rojo", "azul", "verde", "amarillo"];

// Verifica si el array incluye "verde".

// Verifica si el array incluye "negro".

let listaColores = ["rojo", "azul", "verde", "amarillo"];

let incluyeVerde = listaColores.includes("verde");
console.log("¿Incluye verde?", incluyeVerde);

let incluyeNegro = listaColores.includes("negro");
console.log("¿Incluye negro?", incluyeNegro);

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 3< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 3: crear nuevo arrar con filter() ---");
//Dado: let valoresPar = [3, 6, 8, 9, 11, 14];

// Usa .filter() para crear un nuevo array con solo los números pares.

// Muestra el resultado.

let valoresPar = [3, 6, 8, 9, 11, 14];
let paresEncontrados = valoresPar.filter((valor) => valor % 2 === 0);
console.log(paresEncontrados);

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 4< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 4: Buscar usuarios activos ---");

// Usa .filter() para crear un array solo con los usuarios activos.

// Usa .some() para verificar si hay algún usuario con el nombre "Mario".

let usuariosBusqueda = [
  { nombre: "Ana", activo: true },
  { nombre: "Mario", activo: false },
  { nombre: "Laura", activo: true },
];

let usuariosSoloActivos = usuariosBusqueda.filter((usuario) => usuario.activo);
console.log("Usuarios activos:", usuariosSoloActivos);

let contieneMario = usuariosBusqueda.some(
  (usuario) => usuario.nombre === "Mario"
);
console.log("¿Existe Mario?", contieneMario);

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 5< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 5: Sumar elementos con .reduce() ---");

//Dado: let listaVentas = [100, 200, 150, 50];

// Usa .reduce() para calcular la suma total de las ventas.

let listaVentas = [100, 200, 150, 50];
let totalVentas = listaVentas.reduce((acc, venta) => acc + venta, 0);
console.log("Total de ventas:", totalVentas);

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 6< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 6: Contar palabras ---");

//Dado :
let listaPalabras = ["sol", "luna", "sol", "estrella", "luna", "sol"];

//Usa .reduce() para contar cuántas veces aparece cada palabra.

let conteoPalabras = listaPalabras.reduce((acc, palabra) => {
  acc[palabra] = (acc[palabra] || 0) + 1;
  return acc;
}, {});
console.log(conteoPalabras);

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 7< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 7: Uso de .splice() ---");

// Dado:
let secuenciaNumeros = [10, 20, 30, 40, 50];

// Inserta el número 25 en la posición 2 sin eliminar nada.

// Elimina el número en la posición 4.

// Reemplaza el número en la posición 0 con 5.

secuenciaNumeros.splice(2, 0, 25);
console.log(secuenciaNumeros);

secuenciaNumeros.splice(4, 1);
console.log(secuenciaNumeros);

secuenciaNumeros.splice(0, 1, 5);
console.log(secuenciaNumeros);

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 8< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 8: Recorrer con .forEach() ---");

//Usa .forEach() para mostrar cada fruta junto con su índice.

//Dado:
let frutasEjemplo = ["pera", "banana", "manzana"];

frutasEjemplo.forEach((fruta, i) => {
  console.log(i + ": " + fruta);
});

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 9< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 9: Convertir a cadena ---");

//Dado:
let listaTexto = ["Hola", "mundo"];

// Usa .join(" ") para convertir el array en una sola cadena con espacios.

// Resultado esperado: "Hola mundo"

console.log(listaTexto.join(" "));

//- - - - - - - - - - - - - - - - - - - - - - > EJERCICIO 10< - - - - - - - - - - - - - - - - - - - - - -
console.log("--- Ejercicio 10: Duplicar con map() ---");

//Dado:
let numerosBase = [10, 20, 30, 40];

// Usa .map() para crear un nuevo array donde cada número esté duplicado.

let numerosMultiplicados = numerosBase.map((n) => n * 2);
console.log(numerosMultiplicados);
