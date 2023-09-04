//Funcion y prompt usuario
function saludar() {
    console.log("Hola viajeros!");
}
let nombreUsuario = prompt("¿Cuál es tu nombre?");
if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado: " + nombreUsuario);
}

saludar();

//Ciclo---- Podría hacerse una función que permita hacer los ciclos while de validación de la línea 18 y 23 para no repetir código., pero la función saludar funciona bien

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


//objeto
class Viaje {
    constructor(tematica, tiempo, epoca) {
        this.tematica = tematica;
        this.tiempo = tiempo;
        this.epoca = epoca;
        this.info = `Este viaje tiene como actividad ${this.tematica}, durante ${this.tiempo}, en ${this.epoca}`;
    }
}


let destinoArgentina = new Viaje("comidas", "14 dias", "primavera");
let destinoPortugal = new Viaje("calles", "20 dias", "invierno");
let destinoIndonesia = new Viaje("playas", "1 mes", "verano");
let destinoFrancia = new Viaje("museos", "10 dias", "otoño");

const lugar = "calle";
const estacion = "primavera";
const dias = "20 dias";

//array
const destinos = ["Argentina", "Francia", "Indonesia", "Portugal"];
const destinoElegido = prompt("Elige un destino entre: " + destinos.join(", "));
const destinoEncontrado = destinos.find(d => d.toLocaleLowerCase() === destinoElegido.toLocaleLowerCase());
console.log(destinoEncontrado);
alert(`Vas a viajar a ${destinoEncontrado}`);

if (destinoEncontrado) {
    switch (destinoEncontrado.toLocaleLowerCase()) {
        case "argentina":
            mostrarInfoViaje(destinoArgentina);
            break;
        case "francia":
            mostrarInfoViaje(destinoFrancia);
            break;
        case "indonesia":
            mostrarInfoViaje(destinoIndonesia);
            break;
        case "portugal":
            mostrarInfoViaje(destinoPortugal);
            break;
        default:
            alert("Destino no encontrado en la lista.");
    }
} else {
    alert("Destino no válido.");
}

function mostrarInfoViaje(viaje) {
    alert(`Información del viaje:\n${viaje.info}`);
}




