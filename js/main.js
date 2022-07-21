/* Desafío: Incorporar Eventos */

/* Carrito */
let carritoIcono = document.querySelector("#carrito")
let carrito = document.querySelector(".mi-carrito")
let cerrarCarrito = document.querySelector(".cerrar-carrito")

/* Abro Carrito */
carritoIcono.onclick = () => {
    carrito.classList.add("abrir-carrito")
}

cerrarCarrito.onclick = () => {
    carrito.classList.remove("abrir-carrito")
}

/* Carrito funcionando en JS*/
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
}

/* Haciendo la función "ready" */
function ready() {
    let sacarDelCarritoBoton = document.getElementsByClassName("remover-carrito")
    for (let i = 0; i < sacarDelCarritoBoton.length; i++) {
        let boton = sacarDelCarritoBoton[i];
        boton.addEventListener("click", removerItemCarrito)

    }
    /* Cambios en la cantidad */
    let inputsCantidad = document.getElementsByClassName("cantidad-carrito")
    for (let i = 0; i < inputsCantidad.length; i++) {
        let input = inputsCantidad[i];
        input.addEventListener("change", cantidadCambiada)

    }
    /* Agregar al carrito */
    let agregarAlCarrito = document.getElementsByClassName("agregar-carrito")
    for (let i = 0; i < agregarAlCarrito.length; i++) {
        let boton = agregarAlCarrito[i];
        boton.addEventListener("click", agregarCarritoClickeado)
    }

    /* Botón de comprar */
    document.getElementsByClassName("btn-comprar")[0].addEventListener("click", botonCompraClickeado)
}

function botonCompraClickeado(event) {
    alert("Tu orden ha sido procesada")
    let contenidoCarrito = document.getElementsByClassName("contenido-carrito")[0]
    while (contenidoCarrito.hasChildNodes()) {
        contenidoCarrito.removeChild(contenidoCarrito.firstChild)
    }
    actualizarTotal();
}

/* Remueve items del carrito */
function removerItemCarrito(event) {
    let botonClickeado = event.target
    botonClickeado.parentElement.remove()
    actualizarTotal()
}

/* Cantidaad cambiada */
function cantidadCambiada(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actualizarTotal()
}

/* Agregar al carrito II */
function agregarCarritoClickeado(event) {
    let boton = event.target
    let productoTienda = boton.parentElement
    let titulo = productoTienda.getElementsByClassName("titulo")[0].innerText
    let precio = productoTienda.getElementsByClassName("precio")[0].innerText
    let imagen = productoTienda.getElementsByClassName("imagen-producto")[0].src
    agregarProductoAlCarrito(titulo, precio, imagen)
    actualizarTotal()
}

function agregarProductoAlCarrito(titulo, precio, imagen) {
    let cajaCarritoTienda = document.createElement("div")
    cajaCarritoTienda.classList.add("caja-carrito")
    let itemsCarrito = document.getElementsByClassName("contenido-carrito")[0]
    let nombreItemsCarrito = itemsCarrito.getElementsByClassName("titulo-producto")
    for (let i = 0; i < nombreItemsCarrito.length; i++) {
        if (nombreItemsCarrito[i].innerText == titulo) {
            alert("¡Ya tienes este item en tu carrito!")
            return
        }
    }

    let cajaCarritoContenido = ` <img src="${imagen}" alt="producto1" class="carrito-imagen">
                       <div class="detalles">
                           <div class="titulo-producto">${titulo}</div>
                           <div class="precio-carrito">${precio}</div>
                           <input type="number" value="1" class="cantidad-carrito">
                       </div>
                       <img class="remover-carrito"
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ9JREFUSEvt1csRwjAMRdGTSigB6IQSSAeUQCdQAp0AHZBKYFjwCzFyMgmbREuP5l3p2ZYKA0cxsL4cwBq7RCEl9r+KjAALHIMulzilcuqAa0+WPXX/DuipgZdM6g66WvWlNw7Ao8u6bU3nnSyaAI1P/93vyaIRWNRmAGZ/tAtmbZRxxn1BfURq2K2wxTwTUmGDQy4gUzdOi3ZyrBBk3AB+wyoZJl1mqQAAAABJRU5ErkJggg==" />`
    cajaCarritoTienda.innerHTML = cajaCarritoContenido
    itemsCarrito.append(cajaCarritoTienda)
    cajaCarritoTienda.getElementsByClassName("remover-carrito")[0].addEventListener("click", removerItemCarrito)
    cajaCarritoTienda.getElementsByClassName("cantidad-carrito")[0].addEventListener("change", cantidadCambiada)
}



/* Actualizo el total */
function actualizarTotal() {
    let contenidoCarrito = document.getElementsByClassName("contenido-carrito")[0]
    let cajasCarrito = contenidoCarrito.getElementsByClassName("caja-carrito")
    let total = 0
    for (let i = 0; i < cajasCarrito.length; i++) {
        let cajaCarrito = cajasCarrito[i];
        let elementoPrecio = cajaCarrito.getElementsByClassName("precio-carrito")[0]
        let elementoCantidad = cajaCarrito.getElementsByClassName("cantidad-carrito")[0]
        let precio = parseFloat(elementoPrecio.innerText.replace("$", ""))
        let cantidad = elementoCantidad.value
        total = total + (precio * cantidad)
    }
    /* Si hay numeros con centavos */
    total = Math.round(total * 100) / 100

    document.getElementsByClassName("precio-total")[0].innerText = "$" + total

}

