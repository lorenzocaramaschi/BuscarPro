/* Desafío Complementario */
/* Ejemplo 1 */
/* Pedir un numero mediante prompt y sumarle otro numero en cada repiticion, realizando una salida por cada resultado. */
let numero = parseInt(prompt('Ingresa un numero:')); // Pido numero mediante prompt
let rondas = parseInt(prompt('Rondas:')); // Numero de rondas

for (let i = 0; i < rondas; i++) // Bucle
{
    let resultado = numero + i; // Numero a sumar por ronda (i)
    console.log("Vuelta " + i + ": " + numero + " + " + i + " = " + resultado); // Debug de la suma en cada vuelta

}


/* Ejemplo 2 */
/* Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado, hasta que se ingresa "ESC". */
let texto = prompt("Ingrese un texto") /* Pido texto mediante Prompt. */
let textoPrompt = "";

while (texto != "ESC") {
    textoPrompt = textoPrompt + texto + " + "/* Concatenacion de los textos. */
    console.log(textoPrompt); /* Salida por cada resultado. */
    texto = prompt("Ingrese un texto (Toca ESC para salir):"); /* Si se ingresa ESC se termina el bucle. */
}


/* Ejemplo 3 */
/* Pedir un numero por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada. */

let veces = parseInt(prompt("Numero de rondas de Hola: ")) /* Pido un numero por prompt. */

for (let x = 0; x < veces; x++) /* Hago un bucle que dure la cantidad de veces ingresada. */ {

    console.log("Hola"); /* Pongo "Hola" en la consola la cantidad de veces que hayan pedido que dure el bucle. */

}

/* Algoritmo Personal */

let contar = parseInt(prompt("¿Hasta cuanto querés contar?"))
let v = 0


while (contar == 0 || contar < 0) {
    alert('Numero ingresado incorrecto');
    contar = parseInt(prompt("¿Hasta cuanto querés contar?"))


}
if (contar >= 0) {
    while (v < contar) {
        v++;
        console.log(v);

    }
}