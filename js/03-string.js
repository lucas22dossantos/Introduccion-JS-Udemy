//--- ¿QUÉ ES UN STRING?

// Un string es una cadena de texto, es decir, una secuencia de caracteres entre comillas:
let palabra = "Hola Mundo";
console.log(palabra); // "Hola Mundo"

// Caracteres especiales en strings:
let salto = "Línea 1\nLínea 2";
console.log(salto); // Muestra dos líneas

let comillas = 'Ella dijo: "Hola"';
console.log(comillas); // Ella dijo: "Hola"

//- - - - - - - - - - - > CONCATENACIÓN DE STRINGS < - - - - - - - - - - -

// Los strings pueden concatenarse, es decir, unir dos o más cadenas de texto:
let Nombre = "Lucas";
let saludo = "Hola, " + Nombre + "!";
console.log(saludo); // "Hola, Lucas!"

// Forma moderna con Template Strings (backticks):
let saludoNuevo = `Hola, ${Nombre}!`;
console.log(saludoNuevo); // "Hola, Lucas!"

let edad = 25;
console.log(`Tienes ${edad} años`); // "Tienes 25 años"

//- - - - - - - - - - - > PROPIEDADES < - - - - - - - - - - -

// Podemos saber la longitud de un string con la propiedad length:
let mensaje = "Hola, ¿cómo estás?";
console.log(mensaje.length); // 18

// Acceder al último carácter:
console.log(mensaje[mensaje.length - 1]); // "?"

//- - - - - - - - - - - > MÉTODOS < - - - - - - - - - - -

// Convertir un string a mayúsculas o minúsculas:
let texto = "JavaScript es genial";
console.log(texto.toUpperCase()); // "JAVASCRIPT ES GENIAL"
console.log(texto.toLowerCase()); // "javascript es genial"

// Buscar dentro de un string:
let frase = "El sol brilla en el cielo";
console.log(frase.indexOf("sol")); // 3
console.log(frase.includes("brilla")); // true

// Cortar un string:
let textoCorto = "Aprender JavaScript es divertido";
console.log(textoCorto.slice(0, 8)); // "Aprender"

// Reemplazar partes del texto:
let fraseReemplazo = "Java es divertido";
console.log(fraseReemplazo.replace("Java", "JavaScript")); // "JavaScript es divertido"

// Reemplazar todas las apariciones:
let risa = "jajaja";
console.log(risa.replaceAll("a", "e")); // "jejeje"

// Dividir un string en partes:
let frutas = "manzana,pera,banana";
console.log(frutas.split(",")); // ["manzana", "pera", "banana"]

// Eliminar espacios al inicio y al final:
let nombreConEspacios = "  Lucas  ";
console.log(nombreConEspacios.trim()); // "Lucas"
console.log(nombreConEspacios.trimStart()); // "Lucas  "
console.log(nombreConEspacios.trimEnd()); // "  Lucas"

// Repetir un string varias veces:
let eco = "hey ";
console.log(eco.repeat(3)); // "hey hey hey "

//--- CARACTERÍSTICAS ESPECIALES

// Los strings son inmutables: no puedes cambiar directamente un carácter:
let saludoInmutable = "Hola";
// saludoInmutable[0] = "M"; // Esto no funciona

// Son índices tipo array: puedes acceder a caracteres con [ ]:
let text = "Hola";
console.log(text[0]); // "H"

// Recorrer un string con un bucle:
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// Convertir un string en array de letras:
let letras = "Hola".split("");
console.log(letras); // ["H", "o", "l", "a"]

//--- EJERCICIOS DE PRÁCTICA

// 1. Mostrar tu nombre en mayúsculas:
let miNombre = "lucas";
console.log(miNombre.toUpperCase()); // "LUCAS"

// 2. Saber si un mensaje contiene una palabra:
let mensaje2 = "Bienvenido a JavaScript";
console.log(mensaje2.includes("Java")); // true

// 3. Cortar y unir strings:
let parte1 = "Hola";
let parte2 = "Mundo";
let combinado = parte1 + " " + parte2;
console.log(combinado); // "Hola Mundo"

// 4. Reemplazar palabras ofensivas:
let comentario = "Este producto es una porquería";
let limpio = comentario.replace("porquería", "***");
console.log(limpio); // "Este producto es una ***"
