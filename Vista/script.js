
/* Recoger Valores Coche */

import { Vehiculo } from "../Modelo/Vehiculos/vehiculo.js";
import { motocicleta } from "../Modelo/Vehiculos/motocicleta.js";
import { Coche } from "../Modelo/Vehiculos/coche.js";


document.getElementById("btnVehiculo").addEventListener("click", newVehiculo);

export let vehiculos = [];

export function newVehiculo() {
    let divError = document.getElementById("divMessage");
    divError.innerHTML = "";
    /* Coger Datos */
    let modelo = document.getElementById("modeloVehiculo").value;
    let min = parseInt(document.getElementById("minVel").value);
    let max = parseInt(document.getElementById("maxVel").value);
    let tipoTraccion = document.getElementById("tipoTraccion").value;
    let tipoVehiculo = document.getElementById("tipoVehiculo").value;
    try {

        divMessage.innerHTML = "";

        switch (tipoVehiculo) {
            case "coche":
                let coche = new Coche(modelo, tipoTraccion, min, max, tipoVehiculo)
                console.log(coche)

                break;

            case "motocicleta":
                let moto = new motocicleta(modelo, tipoTraccion, min, max, tipoVehiculo);
                console.log(moto)
                moto.movimiento();
                break;
        }

        divMessage.innerHTML = "<p> Vehiculo Creado Correctamente!</p>";


    } catch (e) {
        let divMessage = document.getElementById("divMessage");
        divMessage.innerHTML = "<p>" + e.message + "</p>";
    }

}

