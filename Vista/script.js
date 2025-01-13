
/* Recoger Valores Coche */

import { Vehiculo } from "../Modelo/Vehiculos/vehiculo.js";
import { moto } from "../Modelo/Vehiculos/motocicleta.js";
import { Vehiculo } from "../Modelo/Vehiculos/vehiculo.js";
import { Vehiculo } from "../Modelo/Vehiculos/vehiculo.js";



document.getElementById("btnVehiculo").addEventListener("click", newVehiculo);

export let vehiculos = [];

export function newVehiculo() {
    let divError = document.getElementById("divMessage");
    divError.innerHTML = "";
    /* Coger Datos */
    let modelo = document.getElementById("modeloVehiculo").value;
    let min = document.getElementById("minVel").value;
    let max = document.getElementById("maxVel").value;
    let tipoTraccion = document.getElementById("tipoTraccion").value;
    let tipoVehiculo = document.getElementById("tipoVehiculo").value;

    switch (tipoVehiculo) {
        case "coche":
            let coche = new coche()


        case "moto":
            let moto = new moto(modelo, tipoTraccion, min, max);

    }


    try {
        let vehiculo = new Vehiculo(modelo, tipoTraccion, min, max);
        divMessage.innerHTML = "<p> Vehiculo Creado Correctamente!</p>";
        console.log(vehiculo)

    } catch (e) {
        let divMessage = document.getElementById("divMessage");
        divMessage.innerHTML = "<p>" + e.message + "</p>";
    }

}

