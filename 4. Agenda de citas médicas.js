class Profesional {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    duracionConsulta() {
        return 20;
    }
}
class MedicoGeneral extends Profesional {
    duracionConsulta() {
        return 20;
    }
}
class Especialista extends Profesional {
    duracionConsulta() {
        return 40;
    }
}
const profesionales = [
    new MedicoGeneral(1, "Laura"),
    new Especialista(2, "carlos")
];
const citas = [];
function agendarCita(profesional, fecha) {
    if (citas.some(cita =>
        cita.id === profesional.id && cita.fecha === fecha
    )) {
        console.log("El profesional ya tiene una cita");
        return;
    }
    citas.push({
        id: profesional.id,
        nombre: profesional.nombre,
        fecha: fecha
    });
    console.log("Cita registrada correctamente");
}
agendarCita(profesionales[0], "2026-11-02 09:00");
agendarCita(profesionales[0], "2026-11-02 11:00");
profesionales.forEach(profesional => {
    console.log(
        profesional.nombre,
        profesional.duracionConsulta(),
        "minutos"
    );
});
