let productosEnCarrito = JSON.parse(localStorage.getItem("ProductosEnCarrito"))





if (productosEnCarrito == null || productosEnCarrito.length == 0)
Swal.fire('El carrito esta vacio').then(()=> window.location.href = "../index.html")

let carritoConteiner = document.getElementById("contenedor-carrito")

productosEnCarrito.forEach(producto => { 
    let div = document.createElement("div")
    div.textContent =`${producto.nombre} ${producto.cantidad}`
    carritoConteiner.appendChild(div)
    
});