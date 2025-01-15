
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


    get getNombre() {
        return this.#nombre;
    }

    get getTiempo() {
        return this.#tiempo;
    }

    get getLongitud() {
        return this.#longitud;
    }

}