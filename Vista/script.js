
/* Recoger Valores Coche */
import { Coche } from "../Modelo/Vehiculos/Coche.js";
import { Vehiculo } from "../Modelo/Vehiculos/vehiculo.js";
import { Participante } from "../Modelo/Participantes/Participante.js";
import { Motocicleta } from "../Modelo/Vehiculos/motocicleta.js";/* import { Coche } from "../Modelo/Vehiculos/coche.js";
 */
import { Circuito } from "../Modelo/Pista/Circuito.js";

document.getElementById("btnVehiculo").addEventListener("click", nuevoVehiculo);

let vehiculos = [];
let participantes = [];
let circuitos = [];

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

                break;
            case "motocicleta":
                let moto = new Motocicleta(modelo, tipoTraccion, min, max, tipoVehiculo);
                console.log(moto)
                moto.movimiento();
                break;
        }
        actualizarSelect("vehiculoParticipante", vehiculos, "modelo")
        actualizarSelect("modelo", vehiculos, "modelo")


        divMessage.innerHTML = "<p> Vehiculo Creado Correctamente!</p>";


    } catch (e) {
        let divMessage = document.getElementById("divMessage");
        divMessage.innerHTML = "<p>" + e.message + "</p>";
    }
}
/** Descripcoio funcio
 * 
 * @param {*} selectId 
 * @param {*} array 
 * @param {*} info "modelo" o "nombre"
 */
function actualizarSelect(selectId, array, info) {
    let select = document.getElementById(selectId);
    select.innerHTML = "";

    array.forEach((element) => {
        console.log("info = " + element[info]);
        select.innerHTML += "<option value=" + element[info] + ">" + element[info] + "</option>";
    });

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
        circuitos.push(circuito);
        divMessage.innerHTML = "<p> Circuito Generado Correctamente!</p>";
        console.log(circuito)
        actualizarSelect("asignarCircuito", circuitos, "nombre")
    } catch (e) {
        let divMessage = document.getElementById("divMessageCircuito");
        divMessage.innerHTML = "<p>" + e.message + "</p>";
    }

})

/* Gestion Participante */

/* Crear */
document.getElementById("btnNuevoParticipante").addEventListener("click", nuevoParticipante);
function nuevoParticipante() {

    let divMessage = document.getElementById("divMessageParticipante");
    divMessage.innerHTML = "";
    let nombre = document.getElementById("nombreParticipante").value;
    let vehiculo = document.getElementById("vehiculoParticipante").value;
    let participante = new Participante(nombre, vehiculo);
    participantes.push(participante);
    actualizarSelect("dataListParticipantes", participantes, "nombre");
    actualizarSelect("asignarParticipante", participantes, "nombre");
    divMessage.innerHTML = "<p> Participante Creado Correctamente!</p>";
}