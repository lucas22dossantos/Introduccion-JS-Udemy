//-Un string es una cadena de texto, es decir, una secuencia de caracteres entre comillas:

let palabra = "Hola Mundo";

console.log(palabra); // console.log() imprimir en consola  "Hola Mundo"

// los strings pueden concatenarse, es decir, unir dos o más cadenas de texto:

let Nombre = "Lucas";
let saludo = "Hola, " + Nombre + "!";
console.log(saludo); // console.log() imprimir en consola  "Hola, Lucas!"

//podemos saber la longitud de un string con la propiedad length:
let mensaje = "Hola, ¿cómo estás?";
console.log(mensaje.length); // console.log() imprimir en consola  18

//convertir un string a mayúsculas o minúsculas:
let texto = "JavaScript es genial";
console.log(texto.toUpperCase()); // console.log() imprimir en consola  "JAVASCRIPT ES GENIAL"
console.log(texto.toLowerCase()); // console.log() imprimir en consola  "javascript es genial"

//Buscar dentro de un string:
let frase = "El sol brilla en el cielo";
console.log(frase.indexOf("sol")); // console.log() imprimir en consola  3 (posición donde se encuentra "sol")
console.log(frase.includes("brilla")); // console.log() imprimir en consola  true (verifica si "brilla" está en la frase)

//cortar un string:
let textoCorto = "Aprender JavaScript es divertido";
console.log(textoCorto.slice(0, 8)); // console.log() imprimir en consola  "Aprender" (corta desde el índice 0 hasta el 8)

// Los string son inmutables: no puedes cambiar directamente un carácter.

//Son índices tipo array: puedes acceder a caracteres con [ ].

let text = "Hola";
console.log(text[0]); // "H"
