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
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get vehiculo() {
        return this.#vehiculo;
    }

    set vehiculo(vehiculo) {
        this.#vehiculo = vehiculo;
    }

    get estadisticas() {
        return this.#estadisticas;
    }

    set estadisticas(estadisticas) {
        this.#estadisticas = estadisticas;
    }
}