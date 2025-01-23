import { Vehiculo } from "./vehiculo.js";
import { Circuito } from "../Pista/Circuito.js";

export class Coche extends Vehiculo {


    movimiento(circuito) {

        let movimiento = Math.floor(Math.random() * super.avanceMax) + super.avanceMin;
        console.log("movimiento: " + movimiento)

        if (circuito instanceof Circuito) {
            const modificadores = {
                "lluvioso": { "blanda": 4, "media": 2, "dura": 0 },
                "humedo": { "blanda": 2, "media": 2, "dura": 2 },
                "seco": { "blanda": 0, "media": 2, "dura": 4 }
            }

            movimiento += modificadores[circuito.getTiempo()][this.getTraccion]

            return this.movimiento;
        }
    }

}



