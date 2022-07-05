/* Desafío: Simulador Interactivo */

/* Primero pregunto por fuera del ciclo por si solo quiere elegir 1 producto */

let eleccion = parseInt(prompt("Elige un producto: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))

/* Establezco un total, que funcionará de acumulador después */
let total = 0;

/* Si el usuario ingresa un número que no esté entre 1-9, se le pone una alerta y vuelve a preguntarsele que producto quiere */
while (eleccion == NaN || eleccion > 9 || eleccion <= 0) {
    alert("No existe un producto para ese valor. Vuelva a intentar.")
    eleccion = parseInt(prompt("Elige un producto: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))
}

/* Según el caso correspondiente lo muestro en la consola, y le sumo el valor al total */
switch (eleccion) {
    case 1:
        console.log("Has seleccionado el producto " + eleccion + ",'Carcasa Hero 3 y 4': $100")
        total = total + 100;
        break;
    case 2:
        console.log("Has seleccionado el producto " + eleccion + ",'Funda Silicona Hero 9 y 10': $20")
        total = total + 20;
        break;
    case 3:
        console.log("Has seleccionado el producto " + eleccion + ",'Correa Control GoPro': $25")
        total = total + 25;
        break;
    case 4:
        console.log("Has seleccionado el producto " + eleccion + ",'Pechera infantil': $30")
        total = total + 30;
        break;
    case 5:
        console.log("Has seleccionado el producto " + eleccion + ",'Camara sumergible GoPro Hero 7': $250")
        total = total + 250;
        break;
    case 6:
        console.log("Has seleccionado el producto " + eleccion + ",'Carcasa original GoPro Hero 5,6 y 7': $125")
        total = total + 125;
        break;
    case 7:
        console.log("Has seleccionado el producto " + eleccion + ",'Soporte Doble': $50")
        total = total + 50;
        break;

    case 8:
        console.log("Has seleccionado el producto " + eleccion + ",'Filtros GoPro': $35")
        total = total + 35;
        break;

    case 9:
        console.log("Has seleccionado el producto " + eleccion + ",'Control 3 Botones': $90")
        total = total + 90;
        break;

    default:
        break;
}

/* Pregunto para que el usuario decida si quiere seguir eligiendo productos con un boolean */
let confirmacion = confirm("¿Quieres algún producto más?")


/* Si el Boolean es verdadero, entra a un ciclo en el que se le pregunto que otro producto quiere, hasta que ya no quiera ninguno más */
while (confirmacion) {
    let eleccion = parseInt(prompt("Elige un producto: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))

    /* Si el usuario ingresa un número que no esté entre 1-9, se le pone una alerta y vuelve a preguntarsele que producto quiere */
    while (eleccion == NaN || eleccion > 9 || eleccion <= 0) {
        alert("No existe un producto para ese valor. Vuelva a intentar.")
        eleccion = parseInt(prompt("Elige un producto: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))
    }

    switch (eleccion) {
        case 1:
            console.log("Has seleccionado el producto " + eleccion + ",'Carcasa Hero 3 y 4': $100")
            total = total + 100;
            break;
        case 2:
            console.log("Has seleccionado el producto " + eleccion + ",'Funda Silicona Hero 9 y 10': $20")
            total = total + 20;
            break;
        case 3:
            console.log("Has seleccionado el producto " + eleccion + ",'Correa Control GoPro': $25")
            total = total + 25;
            break;
        case 4:
            console.log("Has seleccionado el producto " + eleccion + ",'Pechera infantil': $30")
            total = total + 30;
            break;
        case 5:
            console.log("Has seleccionado el producto " + eleccion + ",'Camara sumergible GoPro Hero 7': $250")
            total = total + 250;
            break;
        case 6:
            console.log("Has seleccionado el producto " + eleccion + ",'Carcasa original GoPro Hero 5,6 y 7': $125")
            total = total + 125;
            break;
        case 7:
            console.log("Has seleccionado el producto " + eleccion + ",'Soporte Doble': $50")
            total = total + 50;
            break;

        case 8:
            console.log("Has seleccionado el producto " + eleccion + ",'Filtros GoPro': $35")
            total = total + 35;
            break;

        case 9:
            console.log("Has seleccionado el producto " + eleccion + ",'Control 3 Botones': $90")
            total = total + 90;
            break;

        default:
            break;
    }

    confirmacion = confirm("¿Quieres algún producto más?")
}

/* Una vez salimos del ciclo, mostramos cuanto es el Precio final, y pregunto si al usuario le interesa pagar en cuotas */
let cuotas = confirm("Precio Total: " + total + "\nPrecio Total (+IVA): " + iva(total) + "\n¿Desea pagar en cuotas?")

/* Si el usuario quiere pagar en cuotas, le pregunto cuantas cuotas serían y luego le muestro cual es el precio a pagar y en cuantas cuotas mediante una alerta */
if (cuotas) {
    let cantidadCuotas = parseInt(prompt("Ingrese el numero de cuotas deseado:"))
    alert("El valor de las cuotas será de $" + valorCuotas(cantidadCuotas) + " y se abonará en un total de " + cantidadCuotas + " cuotas.")
}

/* Esta funcion agarra un valor y se lo divide al total del producto, que a su vez previamente fue pasado por la funcion "iva" */
function valorCuotas(cantidadCuotas) {
    let precioCuota = iva(total) / cantidadCuotas
    parseFloat(precioCuota.toFixed(2))
    return precioCuota;
}

/* Esta función agarra un valor y lo multiplica por 1.21, osease, le agrega un 21% de su valor. */
function iva(valor) {
    let valorAgregado = valor * 1.21
    parseFloat(valorAgregado.toFixed(2))
    return valorAgregado
}

/* Si el usuario compró un producto, el precio no será 0 y por lo tanto, le mostramos un mensaje agradeciendole su compra! */
if (total != 0) {
    alert("¡Gracias por su compra!")
}
