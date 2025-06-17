// ===============================
// ¿Qué es try...catch?
// ===============================

// try...catch se usa para atrapar errores en el código y manejar qué hacer cuando ocurren, en lugar de que el programa se detenga.
try {
  // Código que puede fallar
} catch (error) {
  // Código que se ejecuta si ocurre un error
}

//Ejemplo
try {
  let resultado = 10 / 0;
  console.log(resultado);

  noExiste(); // esta función no está definida, ¡genera un error!
} catch (error) {
  console.log("¡Ocurrió un error!");
  console.log("Mensaje de error:", error.message);
}

// ===============================
//  Ejercicio 1
// ===============================
console.log("----- ejercicio 1 -----");
// Crea una función que reciba un valor. Si el valor no es una cadena de texto,
// debe lanzar un error. Si es una cadena, debe imprimir su longitud.

function recibeValor(texto) {
  try {
    if (typeof texto !== "string") {
      throw new Error("El nombre debe ser una cadena de texto.");
    }
    console.log("longitud: " + texto.length);
  } catch (error) {
    console.log(error);
  }
}

recibeValor("hola");
recibeValor(1234);

// ===============================
//  Ejercicio 2
// ===============================
console.log("----- ejercicio 2 -----");

// Escribe una función que divida dos números. Si alguno no es un número
// o si el segundo número es cero, lanzá un error. Usá try...catch para manejarlo.

function dividir(valor1, valor2) {
  let resultado;
  try {
    if (
      typeof valor1 === "number" &&
      typeof valor1 === "number" &&
      valor2 !== 0
    ) {
      console.log((resultado = valor1 / valor2));
    } else {
      throw new Error("el valor no es de tipo number o es 0");
    }
  } catch (error) {
    console.log(error);
  }
}

dividir(3, 3);
dividir(3, 0);

// ===============================
//  Ejercicio 3
// ===============================
console.log("----- ejercicio 3 -----");
// Crea una función que reciba un array. Si el parámetro no es un array
// o si el array está vacío, lanzá un error. Si todo está bien, mostrá el primer elemento.

function array(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("no es un array");
    }
    if (arr.length === 0) {
      throw new Error("el array esta vacio");
    }
    console.log("Primer elemento: " + arr[0]);
  } catch (error) {
    console.log(error);
  }
}

array([4, 2, 4]);
array([]);

// ===============================
//  Ejercicio 4
// ===============================
console.log("----- ejercicio 4 -----");

// Simulá una operación que falla aleatoriamente (usá Math.random()). Si falla,
// lanzá un error. Usá try...catch para capturar ese error y mostrar un mensaje.

function simulacion() {
  try {
    let numero = Math.random();
    if (numero < 0.3) {
      throw new Error("Falló la operación aleatoria");
    }
    console.log("¡Operación exitosa!");
  } catch (error) {
    console.log(error);
  }
}

simulacion();
