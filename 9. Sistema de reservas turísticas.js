class Reserva {
    constructor(codigo, cliente, precio) {
        this.codigo = codigo;
        this.cliente = cliente;
        this.precio = precio;
    }
    calcularCosto() {
        return this.precio;
    }
}
class ReservaHotel extends Reserva {
    calcularCosto() {
        return this.precio * 2;
    }
}
class RecorridoTuristico extends Reserva {
    calcularCosto() {
        return this.precio;
    }
}
const reservas = [
    new ReservaHotel(1, "Ana", 100000),
    new RecorridoTuristico(2, "Luis", 50000)
];
reservas.forEach(reserva => {
    console.log(reserva.cliente, reserva.calcularCosto());
});
