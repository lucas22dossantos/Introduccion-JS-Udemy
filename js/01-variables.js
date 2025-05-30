// ------------------------------------------------- VARIABLES -------------------------------------------------

/* 
Introducido en ES6 (2015).

Tiene ámbito de bloque.

Puede cambiar su valor (mutable), pero no se puede volver a declarar en el mismo bloque.
*/

let edad = 25;
edad = 26; // válido

/* 
También introducido en ES6.

Tiene ámbito de bloque.

No se puede reasignar (inmutable), aunque si es un objeto o arreglo, sus contenidos sí pueden cambiar.

*/
const nombre = "Juan";

/* las variables pueden o no tener un valor ejemplo  */
let apellido; // undefined o no esta definido
let ciudad = "Buenos Aires"; // asignación de valor

/*1. Los nombres deben comenzar con: */
/* Una letra (a-z, A-Z)*/ let nombre3;

/* El símbolo guion bajo (_) */ let _privado;

/* El símbolo dólar ($) */ let $precio;

/* pero no se pueden iniciar con un numero */ //let 1dato; // ❌ Error

/* 2. No usar palabras reservadas
No puedes usar palabras del lenguaje como let, var, function, if, return, etc. */

//let if = 5; // ❌ Error

/* 3. Son sensibles a mayúsculas
nombre, Nombre y NOMBRE son tres variables diferentes. */

let nombre4 = "Ana";
let Nombre4 = "Luis"; // ✅ válidas pero diferentes

/* 4. Pueden contener números despues de haber iniciado con alguna letra */

let usuario1 = "Mario"; // ✅ válido
