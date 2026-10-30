class Producto {
    #precio;
    constructor(id, nombre, precio) {
        if (precio <= 0) {
            throw new Error("Precio inválido");
        }
        this.id = id;
        this.nombre = nombre;
        this.#precio = precio;
    }
    obtenerPrecio() {
        return this.#precio;
    }
    calcularCosto() {
        return this.#precio;
    }
}
class ProductoFisico extends Producto {
    calcularCosto() {
        return this.obtenerPrecio() + 5000;
    }
}
class ProductoDigital extends Producto {
    calcularCosto() {
        return this.obtenerPrecio();
    }
}
const carrito = [
    new ProductoFisico(1, "Teclado", 50000),
    new ProductoDigital(2, "Curso JavaScript", 30000)
];
let total = 0;
carrito.forEach(producto => {
    console.log(producto.nombre, producto.calcularCosto());
    total += producto.calcularCosto();
});
console.log("Total de compra:", total);
function agregarProducto(producto, cantidad = 1) {
    if (cantidad <= 0) {
        console.log("Error: la cantidad debe ser mayor que cero");
        return;
    }
    const existe = carrito.some(p => p.id === producto.id);
    if (existe) {
        console.log("Error: el producto ya existe");
        return;
    }
    producto.cantidad = cantidad;
    carrito.push(producto);
    console.log("Producto agregado correctamente");
}
function quitarProducto(id) {
    const posicion = carrito.findIndex(p => p.id === id);
    if (posicion === -1) {
        console.log("Error: producto no encontrado");
        return;
    }
    carrito.splice(posicion, 1);
    console.log("Producto eliminado correctamente");
}
function calcularTotalCarrito() {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.calcularCosto()
            * (producto.cantidad ?? 1);
    });
    return totalCompra;
}
try {
    new ProductoDigital(4, "Curso HTML", -1000);
} catch (error) {
    console.log("Error:", error.message);
}
agregarProducto(
    new ProductoFisico(1, "Mouse", 40000)
);
agregarProducto(
    new ProductoFisico(3, "Mouse", 40000), 0
);
agregarProducto(
    new ProductoFisico(3, "Mouse", 40000), 2
);
quitarProducto(99);
let totalPrueba = calcularTotalCarrito();
console.log("Total actualizado:", totalPrueba);
console.log("¿El total es correcto?", totalPrueba === 175000);
quitarProducto(2);
totalPrueba = calcularTotalCarrito();
console.log("Total después de eliminar:", totalPrueba);
console.log("¿El total es correcto?", totalPrueba === 145000);