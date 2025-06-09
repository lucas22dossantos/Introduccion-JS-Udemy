//¿Qué es .this en JavaScript?

// .this es una palabra clave que hace referencia al contexto de ejecución actual,
// es decir, al objeto que está ejecutando la función. Su valor cambia dependiendo de cómo se llame la función.

//Casos comunes de uso de .this

// 1. Dentro de un objeto: Cuando usás .this dentro de un método de un objeto, hace referencia a ese objeto:
const persona = {
  nombre: "Lucas",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};

persona.saludar();
//En este caso, this.nombre es igual a persona.nombre

// 2. En una función global
// En una función común (fuera de un objeto), this apunta a:

//- window en el navegador

//- global en Node.js

function mostrar() {
  console.log(this);
}

mostrar(); // En el navegador: Window

// 3. Con arrow functions
// Las arrow functions no tienen su propio this. Toman el this del contexto exterior donde fueron creadas.

const usuario = {
  nombre: "Ana",
  saludar: () => {
    console.log("Hola, soy " + this.nombre);
  },
};

persona.saludar(); // Hola, soy Lucas

//En este caso, this no apunta a usuario sino al entorno global (que en este caso es persona que esta mas arriba).
// Por eso no se recomienda usar arrow functions como métodos en objetos si necesitás usar .this.

// 4. Usando .bind(), .call() y .apply()
// Podés cambiar el valor de .this manualmente.

function saludar() {
  console.log("Hola, soy " + this.nombre);
}

const user = { nombre: "Lucía" };

saludar.call(user); // Hola, soy Lucía


¿como funciona lo de .bind() y .apply() ?

y hacer ejercicios.