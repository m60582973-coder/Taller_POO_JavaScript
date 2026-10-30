class ProductoMenu {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    calcularPrecio() {
        return this.precio;
    }
}

class Plato extends ProductoMenu {
    calcularPrecio() {
        return this.precio + 3000;
    }
}

class Bebida extends ProductoMenu {
    calcularPrecio() {
        return this.precio;
    }
}

const pedidos = [
    new Plato("Hamburguesa", 15000),
    new Bebida("Jugo natural", 5000)
];

let total = 0;

pedidos.forEach(producto => {
    total += producto.calcularPrecio();
});

console.log("Total del pedido:", total);
