class Servicio {
    constructor(nombre, tarifa) {
        this.nombre = nombre;
        this.tarifa = tarifa;
    }
    calcularCosto() {
        return this.tarifa;
    }
}
class Electricidad extends Servicio {
    calcularCosto() {
        return this.tarifa + 10000;
    }
}
class Plomeria extends Servicio {
    calcularCosto() {
        return this.tarifa + 5000;
    }
}
const servicios = [
    new Electricidad("Reparar instalación", 50000),
    new Plomeria("Reparar tubería", 40000)
];
servicios.forEach(servicio => {
    console.log(servicio.nombre, servicio.calcularCosto());
});
