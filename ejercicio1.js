

const prompt = require('prompt-sync')(); // Esto es para que se pueda ejecutar prompt() usando la terminal con node.js
// Y en la terminal, se debe instalar: npm install prompt-sync


// Ejercicio: Crear un programa en Javascript que realice lo siguiente:
// 1. Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables


let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));

let mayor; //Aquí vamos a guardar el número mayor al hacer las comparaciones.

//2. Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.

if (num1 > num2) {
    if (num1 > num3){
        //let mayor = num1 esto no me devuelve nada al final: error.
        mayor = num1;
    } else {
        mayor = num3;
    }
} else {
    if (num2 > num3){
        mayor = num2;
    } else {
        mayor = num3;
    }

}

//Análogamente, para ver quién es el menor de los tres números.

let menor;
if (num1  < num2) {
    if (num1 < num3){
        menor = num1;
    } else {
        menor = num3;
    }
} else {
    if (num2 < num3){
        menor = num2;
    } else {
        menor = num3;
    }

}

// Con lo anterior, ya sabemos con certeza quién es el número mayor y quién es el menor, falta ver el centro.

let centro;

if (num1 != menor && num1 != mayor){
    centro = num1;
} else if (num2 != menor && num2 != mayor){
    centro = num2;
} 
else{
    centro = num3;
}
    
// 3. Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.

console.log(`El orden de mayor a menor es: ${mayor}, ${centro}, ${menor}`);
console.log(`El orden de menor a mayor es: ${menor}, ${centro}, ${mayor}`);

// 4. Debe ser capaz de identificar si los números son iguales e imprimir un mensaje los números son iguales.

if (menor == mayor && menor == centro){
    console.log("¡Los número son iguales!")
}