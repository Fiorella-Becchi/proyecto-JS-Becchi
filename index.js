//Funcion y prompt usuario
function saludar() {
    console.log("Hola viajeros!");
}
let nombreUsuario = prompt("¿Cuál es tu nombre?");
if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado:" + nombreUsuario);
}

saludar();

//Ciclo

let precioHotel = parseFloat(prompt("Ingresa el precio del hotel:"));
while (isNaN(precioHotel) || precioHotel < 0) {
    alert("Precio de hotel no válido.");
    precioHotel = parseFloat(prompt("Ingresa el precio del hotel:"));
}
let precioVuelo = parseFloat(prompt("Ingresa el precio del vuelo:"));
while (isNaN(precioVuelo) || precioVuelo < 0) {
    alert("Precio de vuelo no válido.");
    precioVuelo = parseFloat(prompt("Ingresa el precio del vuelo:"));
}

    //Calculo

    const precioTotalviaje = precioHotel + precioVuelo;
    console.log(`El precio total de tu viaje es: ${precioTotalviaje} pesos.`);
    if (precioTotalviaje < 500) {
        alert("Ese precio no existe");
    }
    else if (precioTotalviaje >= 500) {
        alert("Ahora si vas a viajar");
    }
