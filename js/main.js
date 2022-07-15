/* Desafío: Incorporar Arrays */

/* Genero un array de objetos con todos los productos */
const productos = [
    { id: 1, producto: "Carcasa Hero 3 y 4", precio: 100 },
    { id: 2, producto: "Funda Silicona Hero 9 y 10", precio: 20 },
    { id: 3, producto: "Correa Control GoPro", precio: 25 },
    { id: 4, producto: "Pechera infantil", precio: 30 },
    { id: 5, producto: "Camara sumergible GoPro Hero 7", precio: 250 },
    { id: 6, producto: "Carcasa original GoPro Hero 5,6 y 7", precio: 125 },
    { id: 7, producto: "Soporte Doble", precio: 50 },
    { id: 8, producto: "Filtros GoPro", precio: 35 },
    { id: 9, producto: "Control 3 Botones", precio: 90 },
];


/* Genero un array vacío donde irán los elementos agregados por el usuario */
const carrito = [];


/* Primero pregunto por fuera del ciclo por si solo quiere elegir 1 producto */

let eleccion = parseInt(prompt("Elige un producto para agregar al carrito: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))

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
        total = total + productos[0].precio;
        carrito.push(productos[0]);
        break;
    case 2:
        console.log("Has seleccionado el producto " + eleccion + ",'Funda Silicona Hero 9 y 10': $20")
        total = total + productos[1].precio;
        carrito.push(productos[1]);
        break;
    case 3:
        console.log("Has seleccionado el producto " + eleccion + ",'Correa Control GoPro': $25")
        total = total + productos[2].precio;
        carrito.push(productos[2]);
        break;
    case 4:
        console.log("Has seleccionado el producto " + eleccion + ",'Pechera infantil': $30")
        total = total + productos[3].precio;
        carrito.push(productos[3]);
        break;
    case 5:
        console.log("Has seleccionado el producto " + eleccion + ",'Camara sumergible GoPro Hero 7': $250")
        total = total + productos[4].precio;
        carrito.push(productos[4]);
        break;
    case 6:
        console.log("Has seleccionado el producto " + eleccion + ",'Carcasa original GoPro Hero 5,6 y 7': $125")
        total = total + productos[5].precio;
        carrito.push(productos[5]);
        break;
    case 7:
        console.log("Has seleccionado el producto " + eleccion + ",'Soporte Doble': $50")
        total = total + productos[6].precio;
        carrito.push(productos[6]);
        break;

    case 8:
        console.log("Has seleccionado el producto " + eleccion + ",'Filtros GoPro': $35")
        total = total + productos[7].precio;
        carrito.push(productos[7]);
        break;

    case 9:
        console.log("Has seleccionado el producto " + eleccion + ",'Control 3 Botones': $90")
        total = total + productos[8].precio;
        carrito.push(productos[8]);
        break;

    default:
        break;
}

/* Pregunto para que el usuario decida si quiere seguir eligiendo productos con un boolean */
let confirmacion = confirm("¿Quieres algún producto más?")


/* Si el Boolean es verdadero, entra a un ciclo en el que se le pregunto que otro producto quiere, hasta que ya no quiera ninguno más */
while (confirmacion) {
    let eleccion = parseInt(prompt("Elige un producto para agregar al carrito: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))

    /* Si el usuario ingresa un número que no esté entre 1-9, se le pone una alerta y vuelve a preguntarsele que producto quiere */
    while (eleccion == NaN || eleccion > 9 || eleccion <= 0) {
        alert("No existe un producto para ese valor. Vuelva a intentar.")
        eleccion = parseInt(prompt("Elige un producto para agregar al carrito: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))
    }

    /* Depende que producto elija, pongo un push para sumar el objeto al array del carrito */
    switch (eleccion) {
        case 1:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[0].producto + "': $" + productos[0].precio)
            total = total + productos[0].precio;
            carrito.push(productos[0]);
            break;
        case 2:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[1].producto + "': $" + productos[1].precio)
            total = total + productos[1].precio;
            carrito.push(productos[1]);
            break;
        case 3:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[2].producto + "': $" + productos[2].precio)
            total = total + productos[2].precio;
            carrito.push(productos[2]);
            break;
        case 4:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[3].producto + "': $" + productos[3].precio)
            total = total + productos[3].precio;
            carrito.push(productos[3]);
            break;
        case 5:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[4].producto + "': $" + productos[4].precio)
            total = total + productos[4].precio;
            carrito.push(productos[4]);
            break;
        case 6:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[5].producto + "': $" + productos[5].precio)
            total = total + productos[5].precio;
            carrito.push(productos[5]);
            break;
        case 7:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[6].producto + "': $" + productos[6].precio)
            total = total + productos[6].precio;
            carrito.push(productos[6]);
            break;

        case 8:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[7].producto + "': $" + productos[7].precio)
            total = total + productos[7].precio;
            carrito.push(productos[7]);
            break;

        case 9:
            console.log("Has seleccionado el producto " + eleccion + ",'" + productos[8].producto + "': $" + productos[8].precio)
            total = total + productos[8].precio;
            carrito.push(productos[8]);
            break;

        default:
            break;
    }

    /* Vuelvo a preguntar si quiere seguir en el ciclo de comprar productos */
    confirmacion = confirm("¿Quieres algún producto más?")
}

/* Pregunto para que el usuario decida si quiere eliminar algunos productos del carrito con un boolean */
let eliminacion = confirm("¿Antes de ver el total, quieres eliminar alguno de los productos?")

/* En caso de que sí, entra al while */
while (eliminacion) {
    /* Le pido que elija que objeto desea eliminar */
    let eleccion = parseInt(prompt("Elige un producto que quieras eliminar: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))

    /* Si el usuario ingresa un número que no esté entre 1-9, se le pone una alerta para que ingrese un número correcto */
    while (eleccion == NaN || eleccion > 9 || eleccion <= 0) {
        alert("No existe ningún producto en su lista con ese valor. Vuelva a intentar.")
        eleccion = parseInt(prompt("Elige un producto que quieras eliminar: \n 1. Carcasa Hero 3 y 4 \n 2. Funda Silicona Hero 9 y 10 \n 3.Correa Control GoPro \n 4. Pechera infantil \n 5. Camara sumergible GoPro Hero 7 \n 6. Carcasa original GoPro Hero 5,6 y 7 \n 7. Soporte Doble \n 8. Filtros GoPro \n 9. Control 3 botones"))
    }

    /* Index chequea retorna el numero de indice del item del carrito que tiene el mismo id que el que puso el usuario a través de un prompt ("eleccion") */
    let index = carrito.findIndex(propiedad => propiedad.id == eleccion)

    /* Si recoge un indice, este es eliminado del carrito y se le resta su precio al total*/
    if (index != -1) {
        total = total - carrito[index].precio
        carrito.splice(index, 1)
    }
    /* Si el indice es -1, osea no existe la ID ingresada, le llega una alerta al usuario para informarlo */
    else {
        alert("¡Ese producto no esta en su carrito!")
    }

    /* Pregunta para confirmar si se desea seguir en el ciclo */
    eliminacion = confirm("¿Desea eliminar otro producto?")
}


/* Una vez salimos del ciclo, mostramos cuanto es el Precio final, y pregunto si al usuario le interesa pagar en cuotas */
let cuotas = confirm("Precio Total: " + total + "\nPrecio Total (+IVA): " + iva(total).toFixed(2) + "\n¿Desea pagar en cuotas?")

/* Si el usuario quiere pagar en cuotas, le pregunto cuantas cuotas serían y luego le muestro cual es el precio a pagar y en cuantas cuotas mediante una alerta */
if (cuotas) {
    let cantidadCuotas = parseInt(prompt("Ingrese el numero de cuotas deseado:"))
    alert("El valor de las cuotas será de $" + valorCuotas(cantidadCuotas) + " y se abonará en un total de " + cantidadCuotas + " cuotas.")
}

/* Muestro que es lo que compró por consola, lo que quedo en el carrito */
for (const cuenta of carrito) {
    console.log("Compraste: \nProducto: " + cuenta.producto + "\nPrecio(+IVA): " + iva(cuenta.precio).toFixed(2))

}

/* Esta funcion agarra un valor y se lo divide al total del producto, que a su vez previamente fue pasado por la funcion "iva" */
function valorCuotas(cantidadCuotas) {
    let precioCuota = iva(total) / cantidadCuotas
    parseFloat(precioCuota.toFixed(2))
    return precioCuota.toFixed(2);
}

/* Esta función agarra un valor y lo multiplica por 1.21, osease, le agrega un 21% de su valor. */
function iva(valor) {
    let valorAgregado = valor * 1.21
    parseFloat(valorAgregado.toFixed(2))
    return valorAgregado
}

/* Si el usuario compró un producto, el precio no será 0 y por lo tanto, le mostramos un mensaje agradeciendole su compra! */
if (total != 0) {
    alert("¡Gracias por su compra!\nSu numero de orden de compra es el #" + codigoUsuario(1000000000, 9999999999)+"\nHora de la compra: "+new Date())
}

/* Genero un numero de compra aleatorio de 10 dígitos utilizando la siguiente función: */
function codigoUsuario(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}

/* Hago un mapa para el sort de Menor a mayor, para no romper el array de productos inicial */
const precios = productos.map((el) => {
    return {
        precio: el.precio,
        producto: el.producto
    }
}
)

/* Hago un mapa para el sort de Mayor a menor, para no romper el array de productos inicial */
const precios2 = productos.map((el) => {
    return {
        precio: el.precio,
        producto: el.producto
    }
}
)


/* Debug de Lista con precios de Menor a Mayor por consola */
console.log("Precios Menor a Mayor:")
console.log(precios.sort((a, b) => a.precio - b.precio))

/* Debug de Lista con precios de Mayor a Menor por consola */
console.log("Precios Mayor a Menor:")
console.log(precios2.sort((a, b) => b.precio - a.precio)) 



