
/* Recoger Valores Coche */
import { Coche } from "../Modelo/Vehiculos/Coche.js";
import { Vehiculo } from "../Modelo/Vehiculos/Vehiculo.js";
import { Motocicleta } from "../Modelo/Vehiculos/Motocicleta.js";
/* import { Coche } from "../Modelo/Vehiculos/coche.js";
 */
import { Circuito } from "../Modelo/Pista/Circuito.js";

document.getElementById("btnVehiculo").addEventListener("click", nuevoVehiculo);

let vehiculos = [];

function nuevoVehiculo() {
    let divError = document.getElementById("divMessage");
    divError.innerHTML = "";
    /* Coger Datos */
    let modelo = document.getElementById("modeloVehiculo").value;
    let min = parseInt(document.getElementById("minVel").value) | 0;
    console.log("min" + min)
    let max = parseInt(document.getElementById("maxVel").value) | 0;
    let tipoTraccion = document.getElementById("tipoTraccion").value;
    let tipoVehiculo = document.getElementById("tipoVehiculo").value;
    try {
        divMessage.innerHTML = "";
        switch (tipoVehiculo) {
            case "coche":
                let coche = new Coche(modelo, tipoTraccion, min, max, tipoVehiculo)
                vehiculos.push(coche)
                actualizarSelect(vehiculos)
                break;
            case "motocicleta":
                let moto = new Motocicleta(modelo, tipoTraccion, min, max, tipoVehiculo);
                console.log(moto)
                vehiculos.push(moto)
                actualizarSelect(vehiculos)
                moto.movimiento();
                break;
        }

        console.log
        divMessage.innerHTML = "<p> Vehiculo Creado Correctamente!</p>";


    } catch (e) {
        let divMessage = document.getElementById("divMessage");
        divMessage.innerHTML = "<p>" + e.message + "</p>";
    }
}

function actualizarSelect(array) {
    let select = document.getElementById("vehiculoParticipante");
    select.innerHTML = "";

    array.forEach(element => {
        console.log(element)
        console.log(element.modelo)
        select.innerHTML += "<option value=" + element.modelo + ">" + element.modelo + "</option>";
    });
    console.log(select)
}

document.getElementById("nuevaCarrera").addEventListener("click", function () {
    let divMessage = document.getElementById("divMessageCircuito");
    console.log("prueba")

    try {
        divMessage.innerHTML = "";

        let nombre = document.getElementById("nombreCarrera").value;
        let longitud = parseInt(document.getElementById("longitud").value);
        let tiempo = document.getElementById("tiempo").value;

        let circuito = new Circuito(nombre, tiempo, longitud);

        divMessage.innerHTML = "<p> Circuito Generado Correctamente!</p>";
        console.log(circuito)
    } catch (e) {
        let divMessage = document.getElementById("divMessage");
        divMessage.innerHTML = "<p>" + e.message + "</p>";
    }

})


function nuevoParticipante() {

    let nombre = document.getElementById("nombreParticipante");







}


document.getElementById("btnNuevoParticipante").addEventListener("click", nuevoParticipante())






