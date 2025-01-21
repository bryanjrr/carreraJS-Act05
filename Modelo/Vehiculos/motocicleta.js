import { Vehiculo } from "./Vehiculo.js";
import { Circuito } from "../Pista/Circuito.js";

export class Motocicleta extends Vehiculo {
    movimiento() {
        let movimiento = Math.floor(Math.random() * super.avanceMax) + super.avanceMin;
        console.log("movimiento: " + movimiento)
        switch (super.traccion) {
            case "dura":
                movimiento += 5;
                console.log("Con traccion dura: " + movimiento)
                break;
            case "mediana":
                movimiento += 2;
                console.log("Con traccion mediana: " + movimiento)
                break;
        }
        return movimiento;
    }

    controlSuelo(pista) {
        if (pista instanceof Circuito) {
            let caer = 0;
            let caerSuelo;

            if (pista.getTiempo() == "lluvioso" && this.traccion == "dura") {
                caer = 30;
            } else if (pista.getTiempo() == "media" && this.traccion == "media" || this.traccion == "dura") {
                caer = 20;
            } else if (pista.getTiempo() == "humedo" && this.traccion == "media") {
                caer = 10;
            } else {
                caer = 5;
            }
            probabilidad = Math.floor(Math.random() * 100) + 1;
            if (probabilidad < caer) {
                caerSuelo = false;
            } else {
                console.log("El vehiculo se ha caido");
                caerSuelo = true;
            }

            return caerSuelo;
        }
    }





}