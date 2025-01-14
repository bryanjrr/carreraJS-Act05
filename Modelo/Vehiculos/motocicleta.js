import { Vehiculo } from "./vehiculo.js";

export class motocicleta extends Vehiculo {


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

    controlSuelo(){
        
    }





}