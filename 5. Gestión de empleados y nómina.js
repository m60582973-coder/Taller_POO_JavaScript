class Empleado {
    #identificacion;
    #nombre;

    constructor(identificacion, nombre) {
        identificacion = identificacion.trim();
        nombre = nombre.trim();

        if (!identificacion || !nombre) {
            throw new Error("La identificación y el nombre son obligatorios.");
        }

        this.#identificacion = identificacion;
        this.#nombre = nombre;
    }

    // Métodos para consultar los atributos privados
    obtenerIdentificacion() {
        return this.#identificacion;
    }

    obtenerNombre() {
        return this.#nombre;
    }

    trabajar() {
        return "El empleado está trabajando.";
    }
}

// Clase hija Administrador
class Administrador extends Empleado {
    constructor(identificacion, nombre, area) {
        super(identificacion, nombre);
        this.area = area;
    }

    trabajar() {
        return "El administrador dirige el área de " + this.area;
    }
}

// Clase hija Docente
class Docente extends Empleado {
    constructor(identificacion, nombre, materia) {
        super(identificacion, nombre);
        this.materia = materia;
    }

    trabajar() {
        return "El docente enseña " + this.materia;
    }
}

// Clase hija Tecnico
class Tecnico extends Empleado {
    constructor(identificacion, nombre, especialidad) {
        super(identificacion, nombre);
        this.especialidad = especialidad;
    }

    trabajar() {
        return "El técnico trabaja en " + this.especialidad;
    }
}

// Arreglo para guardar los empleados
const empleados = [];

try {
    empleados.push(new Administrador("1001", "Carlos", "Sistemas"));
    empleados.push(new Docente("1002", "Maria", "Programación"));
    empleados.push(new Tecnico("1003", "Juan", "Computadores"));

    // Recorrer y mostrar los empleados
    empleados.forEach(empleado => {
        console.log("Identificación: " + empleado.obtenerIdentificacion());
        console.log("Nombre: " + empleado.obtenerNombre());
        console.log("Trabajo: " + empleado.trabajar());
        console.log("---------------------------");
    });

} catch (error) {
    console.log("Error: " + error.message);
}
