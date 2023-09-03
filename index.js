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

//array
const destinos = ["Argentina", "Francia", "Indonesia", "Portugal"];
const destinoElegido = prompt("Elige un destino entre: " + destinos.join(", ")); 


//objeto
class Viaje {
    constructor ( tematica,tiempo, epoca){
        this.tematica = tematica;
        this.tiempo = tiempo;
        this.epoca = epoca;
        this.info = `Este viaje tiene como ${this.tematica}, durante ${this.tiempo}, en la ${this.epoca}`;
    }
}

let destinoArgentina = new Viaje (comidas, "14 dias", primavera);
let destinoPortugal = new Viaje (calles,"20 dias", invierno);
let destinoIndonesia = new Viaje (playas, "1 mes", verano);
let destinoFrancia = new Viaje (museos, "10 dias", otoño);




