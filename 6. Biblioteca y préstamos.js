class Recurso {
    #disponible = true;
    constructor(codigo, titulo) {
        this.codigo = codigo;
        this.titulo = titulo;
    }
    prestar() {
        if (!this.#disponible) {
            console.log("Recurso no disponible");
            return;
        }
        this.#disponible = false;
        console.log("Préstamo realizado");
    }
    calcularPlazo() {
        return 7;
    }
}
class LibroImpreso extends Recurso {
    calcularPlazo() {
        return 14;
    }
}
class RecursoDigital extends Recurso {
    calcularPlazo() {
        return 7;
    }
}
const recursos = [
    new LibroImpreso(1, "JavaScript"),
    new RecursoDigital(2, "Curso digital")
];
recursos.forEach(recurso => {
    console.log(recurso.titulo, recurso.calcularPlazo(), "días");
});
recursos[0].prestar();

