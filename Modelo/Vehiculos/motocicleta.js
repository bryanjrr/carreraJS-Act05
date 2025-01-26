import { Vehiculo } from "./vehiculo.js";
import { Circuito } from "../Pista/Circuito.js";

export class Motocicleta extends Vehiculo {
    movimiento(pista) {
        let movimiento = Math.floor(Math.random() * super.avanceMax) + super.avanceMin;

        switch (super.traccion) {
            case "dura":
                movimiento += 5;
                console.log("Con tracción dura: " + movimiento);
                break;
            case "mediana":
                movimiento += 2;
                console.log("Con tracción mediana: " + movimiento);
                break;
        }

        if (this.controlSuelo(pista)) {
            console.log("La motocicleta ha caído al suelo y no avanzará por 5 movimientos.");
            return 0;
        }

        return movimiento;
    }


    controlSuelo(pista) {
        let caerProbabilidad = 0;
        let probabilidad = Math.floor(Math.random() * 100) + 1;  // Generamos una probabilidad aleatoria

        if (pista instanceof Circuito) {
            if (pista.getTiempo() === "lluvioso" && this.traccion === "dura") {
                caerProbabilidad = 30;
            } else if (pista.getTiempo() === "húmedo" && this.traccion === "dura") {
                caerProbabilidad = 20;
            } else if (pista.getTiempo() === "mojado" && this.traccion === "dura") {
                caerProbabilidad = 30;
            } else if (pista.getTiempo() === "mojado" && this.traccion === "mediana") {
                caerProbabilidad = 20;
            } else if (pista.getTiempo() === "húmedo" && this.traccion === "mediana") {
                caerProbabilidad = 10;
            } else {
                caerProbabilidad = 5;
            }


            if (probabilidad <= caerProbabilidad) {
                return true;
            }
        }

        return false;
    }
}
