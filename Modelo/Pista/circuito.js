
export class Circuito {
    #nombre;
    #tiempo;
    #longitud;

    constructor(nombre, tiempo, longitud) {
        this.#nombre = nombre;
        this.#tiempo = tiempo;
        this.#longitud = longitud;

        if (this.#longitud < 0 || this.#longitud > 500) {
            throw new Error("La longitud debe de estar entre 0-500");
        }
    }

    get nombre() {
        return this.#nombre;
    }

    get tiempo() {
        return this.#tiempo;
    }

    get longitud() {
        return this.#longitud;
    }

}