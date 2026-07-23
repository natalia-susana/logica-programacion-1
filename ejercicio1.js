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

console.log(mayor);




// 3. Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.

