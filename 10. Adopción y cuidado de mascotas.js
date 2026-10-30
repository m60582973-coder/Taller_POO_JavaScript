class Mascota {
    #adoptada = false;
    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    cuidados() {
        return "Necesita alimentación y atención";
    }

    adoptar() {
        if (this.#adoptada) {
            console.log("Esta mascota ya fue adoptada");
            return;
        }

        this.#adoptada = true;
        console.log("Adopción realizada");
    }
}
class Perro extends Mascota {
    cuidados() {
        return "Necesita paseos y alimentación";
    }
}
class Gato extends Mascota {
    cuidados() {
        return "Necesita arenero y alimentación";
    }
}
const mascotas = [
    new Perro(1, "Max", 3),
    new Gato(2, "Michi", 2)
];
mascotas.forEach(mascota => {
    console.log(mascota.nombre, mascota.cuidados());
});
mascotas[0].adoptar();
