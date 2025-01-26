
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
let carrera = [];
let carrerasDisponibles = [];

function actualizarCarrerasDisponibles() {
    carrerasDisponibles = [];
    carrera.forEach((element) => {
        let participantesCircuito = carrera.filter(e => e.circuito.nombre === element.circuito.nombre);

        if (participantesCircuito.length === 2) {
            if (!carrerasDisponibles.some(c => c.nombre === element.circuito.nombre)) {
                carrerasDisponibles.push(element.circuito);
            }
        } else {
            carrerasDisponibles = carrerasDisponibles.filter(c => c.nombre !== element.circuito.nombre);
        }
    });

    let select = document.getElementById("cargarCircuitoo");
    select.innerHTML = "";

    carrerasDisponibles.forEach((circuito) => {
        select.innerHTML += `<option value="${circuito.nombre}">${circuito.nombre}</option>`;
    });
}


function nuevoVehiculo() {
    let divError = document.getElementById("divMessage");
    divError.innerHTML = "";
    let vehiculoDuplicado = false;
    let modelo = document.getElementById("modeloVehiculo").value;
    let min = parseInt(document.getElementById("minVel").value) | 0;
    let max = parseInt(document.getElementById("maxVel").value) | 0;
    let tipoTraccion = document.getElementById("tipoTraccion").value;
    let tipoVehiculo = document.getElementById("tipoVehiculo").value;
    vehiculos.forEach(element => {
        if (modelo == element.modelo) {
            vehiculoDuplicado = true;
            console.log(vehiculoDuplicado)
        };
    });

    if (vehiculoDuplicado) {
        divError.innerHTML = "<p> Vehiculo Duplicado! Registra otro Vehiculo!</p>";
    } else {
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

    setTimeout(function () {
        divMessage.innerHTML = "";
    }, 1000)
}

document.getElementById("cargarEstadisticasCoche").addEventListener("click", function () {
    const modeloSeleccionado = document.getElementById("modeloVehiculo").value;
    const vehiculo = vehiculos.find(vehiculo => vehiculo.modelo === modeloSeleccionado);
    const divMessage = document.getElementById("divMessage");
    console.log(vehiculo)
    console.log(vehiculo.tipoVehiculo
    )
    if (vehiculo) {
        document.getElementById("minVel").value = vehiculo.avanceMin;
        document.getElementById("maxVel").value = vehiculo.avanceMax;
        document.getElementById("tipoTraccion").value = vehiculo.traccion;
        document.getElementById("tipoVehiculo").value = vehiculo.tipoVehiculo
            ;

        document.getElementById("divMessage").innerHTML = `<p>Estadísticas cargadas para ${modeloSeleccionado}!</p>`;
    } else {
        document.getElementById("divMessage").innerHTML = `<p>Vehículo no encontrado. Intenta con otro modelo.</p>`;
    }

    setTimeout(function () {
        divMessage.innerHTML = "";
    }, 1000)
});


function actualizarSelect(selectId, array, info) {
    let select = document.getElementById(selectId);
    select.innerHTML = "";

    array.forEach((element) => {
        select.innerHTML += "<option value=" + element[info] + ">" + element[info] + "</option>";
    });

}

/* Crear Carrera */

document.getElementById("nuevaCarrera").addEventListener("click", function () {
    let divMessage = document.getElementById("divMessageCircuito");

    try {
        divMessage.innerHTML = "";
        let nombre = document.getElementById("nombreCarrera").value;
        let longitud = parseInt(document.getElementById("longitud").value);
        let tiempo = document.getElementById("tiempo").value;

        let circuito = new Circuito(nombre, tiempo, longitud);
        circuitos.push(circuito);
        divMessage.innerHTML = "<p> Circuito Generado Correctamente!</p>";
        actualizarSelect("asignarCircuito", circuitos, "nombre")
    } catch (e) {
        let divMessage = document.getElementById("divMessageCircuito");
        divMessage.innerHTML = "<p>" + e.message + "</p>";
    }

    setTimeout(function () {
        divMessage.innerHTML = "";
    }, 1000)
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

    setTimeout(function () {
        divMessage.innerHTML = "";
    }, 1000)
}


/* Agregar / Quitar Participante */
document.getElementById("btnAsignar").addEventListener("click", asignarCarrera);

function asignarCarrera() {
    let circuitoValue = document.getElementById("asignarCircuito").value;
    let participanteValue = document.getElementById("asignarParticipante").value;
    let divMessage = document.getElementById("divMessageAsignar");

    divMessage.innerHTML = "";

    let circuito = circuitos.find(function (element) {
        return circuitoValue == element.nombre;
    });

    let participante = participantes.find(function (element) {
        return participanteValue == element.nombre;
    });

    if (circuito && participante) {
        let alreadyAssigned = carrera.some(element => element.circuito.nombre === circuito.nombre && element.participante.nombre === participante.nombre);

        if (!alreadyAssigned) {
            carrera.push({ circuito, participante });
            divMessage.innerHTML = `Participante <b>${participante.nombre}</b> Asignado a <b>${circuito.nombre}</b> Correctamente!`;

            actualizarCarrerasDisponibles();
        } else {
            divMessage.innerHTML = `El participante <b>${participante.nombre}</b> ya está asignado a este circuito.`;
        }
    } else {
        divMessage.innerHTML = "Circuito o Participante no encontrado.";
    }

    setTimeout(function () {
        divMessage.innerHTML = "";
    }, 1000);
}


document.getElementById("btnQuitar").addEventListener("click", quitarCarrera);

function quitarCarrera() {
    let circuitoValue = document.getElementById("asignarCircuito").value;
    let participanteValue = document.getElementById("asignarParticipante").value;
    let divMessage = document.getElementById("divMessageAsignar");

    divMessage.innerHTML = "";

    let index = carrera.findIndex(function (element) {
        return circuitoValue == element.circuito.nombre && participanteValue == element.participante.nombre;
    });

    if (index !== -1) {
        carrera.splice(index, 1);
        divMessage.innerHTML = "Participante borrado correctamente!";

        actualizarCarrerasDisponibles();
    } else {
        divMessage.innerHTML = "No se encontró el participante en este circuito.";
    }

    setTimeout(function () {
        divMessage.innerHTML = "";
    }, 1000);
}

/* Cargar Circuito */

document.getElementById("cargarCircuitoBtn").addEventListener("click", cargarCircuito);

function cargarCircuito() {
    const circuitoSeleccionado = document.getElementById("cargarCircuitoo").value;

    const divCircuitoCargado = document.getElementById("divCircuitoCargado");
    const mensajeCircuito = document.getElementById("mensajeCircuito");
    const detallesCircuito = document.getElementById("detallesCircuito");
    const participantesCircuito = document.getElementById("participantesCircuito");


    detallesCircuito.innerHTML = "";
    participantesCircuito.innerHTML = "";

    if (!circuitoSeleccionado) {
        mensajeCircuito.textContent = "Por favor, selecciona un circuito.";
        divCircuitoCargado.style.display = "none";
        return;
    }

    const carrerasFiltradas = carrera.filter(
        (c) => c.circuito.nombre === circuitoSeleccionado
    );

    if (carrerasFiltradas.length === 0) {
        mensajeCircuito.textContent = "No se encontraron participantes para este circuito.";
        divCircuitoCargado.style.display = "none";
        return;
    }

    const circuito = carrerasFiltradas[0].circuito;

    mensajeCircuito.textContent = `Circuito cargado: ${circuito.nombre}`;
    divCircuitoCargado.style.display = "block";

    detallesCircuito.innerHTML = `
        <h3>Detalles del Circuito</h3>
        <p><strong>Nombre:</strong> ${circuito.nombre}</p>
        <p><strong>Longitud:</strong> ${circuito.longitud} metros</p>
        <p><strong>Tiempo:</strong> ${circuito.tiempo}</p>
    `;

    participantesCircuito.innerHTML = "<h3>Participantes:</h3>";
    carrerasFiltradas.forEach(({ participante }) => {
        participantesCircuito.innerHTML += `
            <p><strong>${participante.nombre}</strong> - Vehículo: ${participante.vehiculo}</p>
        `;
    });
}

/* Iniciar Circuito */

document.getElementById("btnStartRace").addEventListener("click", function () {
    const circuitoSeleccionado = document.getElementById("cargarCircuitoo").value;
    const carrerasFiltradas = carrera.filter(
        (c) => c.circuito.nombre === circuitoSeleccionado
    );

    if (carrerasFiltradas.length === 0) {
        alert("Por favor, carga un circuito primero.");
        return;
    }

    const circuito = carrerasFiltradas[0].circuito;
    const participantesEnCarrera = carrerasFiltradas.map(({ participante }) => participante);

    iniciarSimulacion(circuito, participantesEnCarrera);
});

function iniciarSimulacion(circuito, participantesEnCarrera) {
    const longitudCarrera = circuito.longitud;

    let posiciones = participantesEnCarrera.map((participante) => ({
        participante: participante,
        posicion: 0,
    }));

    const intervalo = setInterval(() => {
        posiciones.forEach((entry) => {
            const vehiculo = vehiculos.find((v) => v.modelo === entry.participante.vehiculo);
            if (vehiculo) {
                const movimiento = vehiculo.movimiento(circuito);
                entry.posicion += movimiento;  // Sumamos el avance a la posición
            }
        });

        const progreso = posiciones.map((entry) => {
            const posicion = isNaN(entry.posicion) ? 0 : entry.posicion;
            return `
                <p>${entry.participante.nombre} (${entry.participante.vehiculo}): ${posicion.toFixed(2)} metros</p>
            `;
        }).join("");

        document.getElementById("progresoCarrera").innerHTML = `
            <h3>Progreso de la Carrera</h3>
            ${progreso}
        `;

        const ganador = posiciones.find((entry) => entry.posicion >= longitudCarrera);
        if (ganador) {
            clearInterval(intervalo);
            document.getElementById("progresoCarrera").innerHTML += `
                <h3>¡Ganador: ${ganador.participante.nombre} con ${ganador.participante.vehiculo}!</h3>
            `;
        }
    }, 500);
}

