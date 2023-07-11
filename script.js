let productos = [{ id: 1, general: "todos", nombre: "Polera BQTO", categoria: "ropa", imagen: "./imagenes/bqto city 2.jpg", precio: 500 },
{ id: 2, general: "todos", nombre: "Polera CCS", categoria: "ropa", imagen: "./imagenes/cc city.jpg", precio: 300 },
{ id: 3, general: "todos", nombre: "Nike Colors", categoria: "zapatillas", imagen: "./imagenes/sneaker4.jpg", precio: 450 },
{ id: 4, general: "todos", nombre: "Nike Black", categoria: "zapatillas", imagen: "./imagenes/sneaker5.jpg", precio: 370 },
{ id: 5, general: "todos", nombre: "Gorra White", categoria: "accesorios", imagen: "./imagenes/Nike-L91-novelty-cap-3.png", precio: 600 },
{ id: 6, general: "todos", nombre: "Gorra Black", categoria: "accesorios", imagen: "./imagenes/1650550561633.png", precio: 650 }]

let contenedorProductos = document.querySelector("#contenedor-productos")
let categoriaProductos = document.querySelectorAll(".botonesCategoria")

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {

        let div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
<img src="${producto.imagen}" class="imagen" alt="imagen producto">
<h2>${producto.nombre}</h2>
<h3>${producto.precio}$</h3>
<button class="boton" id="${producto.id}">AGREGAR AL CARRO</button>`
        contenedorProductos.appendChild(div);
    })

}

cargarProductos(productos)

categoriaProductos.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id != "todos") {
            let productosBoton = productos.filter(producto => producto.categoria === e.currentTarget.id)
            cargarProductos(productosBoton)
        }
        else { cargarProductos(productos) }
    })

})

let carrito = []

let botonAgregar = document.getElementsByClassName("boton")

