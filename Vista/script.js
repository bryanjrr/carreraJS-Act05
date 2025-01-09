
/* Recoger Valores Coche */

let crearVehiculo = document.getElementById("nuevoVehiculo");
crearVehiculo.addEventListener("click", function () {
    let divError = document.getElementById("divMessage");

    divError.innerHTML = "";
    /* Coger Datos */
    let modelo = document.getElementById("modeloVehiculo").value;
    let min = document.getElementById("minVel").value;
    let max = document.getElementById("maxVel").value;
    let tipoTraccion = document.getElementById("tipoTraccion").value;
    let tipoVehiculo = document.getElementById("tipoVehiculo").value;


    try {
        let vehiculo = new Vehiculo(modelo, min, max, tipoTraccion, tipoVehiculo);
        divMessage.innerHTML = "<p> Vehiculo Creado Correctamente!</p>";
        console.log(vehiculo)
    } catch (e) {
        let divMessage = document.getElementById("divMessage");
        divMessage.innerHTML = "<p>" + e.message + "</p>";
    }

})