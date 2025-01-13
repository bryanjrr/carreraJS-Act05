export class Vehiculo {
    #modelo;
    #traccion;
    #avanceMin;
    #avanceMax;

    constructor(modelo, traccion, avanceMin, avanceMax) {
        this.#modelo = modelo;
        this.#traccion = traccion;

        if (avanceMin < 1 && avanceMin > 50) {
            throw new Error("La velocidad minima del vehiculo tiene que ser superior a 0")
        } else {
            this.#avanceMin = avanceMin;
        }

        if (avanceMax < 51 && avanceMax >= 200) {
            throw new Error("La velocidad maxima del coche debe ser inferior a 200")
        } else {
            this.#avanceMax = avanceMax;
        }
    }

    get getModelo() {
        return this.#modelo;
    }

    set setModelo(nuevoModelo) {
        this.#modelo = nuevoModelo;
    }

    get traccion() {
        return this.#traccion;
    }

    get avanceMin() {
        return this.#avanceMin;
    }

    set avanceMin(nuevoAvanceMin) {
        this.#avanceMin = nuevoAvanceMin;
    }

    get avanceMax() {
        return this.#avanceMax;
    }
    set avanceMax(nuevoAvanceMax) {
        this.#avanceMax = nuevoAvanceMax;
    }
}