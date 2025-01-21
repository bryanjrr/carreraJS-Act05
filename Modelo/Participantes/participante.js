export class Participante {

    #nombre;
    #vehiculo;
    #estadisticas;

    constructor(nombre, vehiculo, estadisticas = []) {
        this.#nombre = nombre;
        this.#vehiculo = vehiculo;
        this.#estadisticas = estadisticas;
    }

    get nombre() {
        this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get vehiculo() {
        this.#vehiculo;
    }

    set vehiculo(vehiculo) {
        this.#vehiculo = vehiculo;
    }

    get estadisticas() {
        this.#estadisticas;
    }

    set estadisticas(estadisticas) {
        this.#estadisticas = estadisticas;
    }
}