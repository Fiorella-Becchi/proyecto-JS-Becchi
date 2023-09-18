/*//Funcion y prompt usuario
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

//Ciclo
// Podría hacerse una función que permita hacer los ciclos while de validación de la línea 18 y 23 para no repetir código., pero la función saludar funciona bien

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
*/

//objeto
class Viaje {
    constructor(nombre, tematica, tiempo, epoca) {
        this.nombre = nombre;
        this.tematica = tematica;
        this.tiempo = tiempo;
        this.epoca = epoca;
        this.info = `Este viaje tiene como actividad ${this.tematica}, durante ${this.tiempo}, en ${this.epoca}`;
    }
    verInformacion = () => {
        document.write(this.info)
    }
}


let destinoArgentina = new Viaje("Argentina", "comidas", "14 dias", "primavera");
let destinoPortugal = new Viaje("Portugal", "calles", "20 dias", "invierno");
let destinoIndonesia = new Viaje("Indonesia", "playas", "1 mes", "verano");
let destinoFrancia = new Viaje("Francia", "museos", "10 dias", "otoño");

const paisesDestino = [destinoArgentina, destinoPortugal, destinoIndonesia, destinoFrancia];

const lugar = "calle";
const estacion = "primavera";
const dias = "20 dias";

destinoArgentina.verInformacion();
destinoPortugal.verInformacion();
destinoIndonesia.verInformacion();
destinoFrancia.verInformacion();


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


// Evento: botón para seleccionar el destino
const seleccionarDestinoBtn = document.getElementById("seleccionarDestinoBtn");
seleccionarDestinoBtn.addEventListener("click", () => {
    const destinoElegido = prompt("Elige un destino entre: " + destinos.join(", "));
    const destinoEncontrado = destinos.find(d => d.toLocaleLowerCase() === destinoElegido?.toLocaleLowerCase());

    if (destinoEncontrado) {
        localStorage.setItem("destinoElegido", destinoEncontrado);
        alert(`Has seleccionado ${destinoEncontrado}.`);
    } else {
        alert("Destino no válido.");
    }
});

// Obtener y mostrar el destino seleccionado
const destinoGuardado = localStorage.getItem("destinoElegido");
if (destinoGuardado) {
    alert(`Has elegido viajar a ${destinoGuardado}.`);
}


function mostrarDestinos() {
    const contenedorDestinos = document.getElementById('contenedorDestinos');
    paisesDestino.forEach(pais => {
        const card = document.createElement('div');
        card.setAttribute('class', 'cardDestino')
        card.innerHTML = `<p>${pais.nombre}</p>
                          <p>${pais.info}</p>
                          <button id="${pais.nombre}">Elegir Destino </button>
                          `
        contenedorDestinos.appendChild(card);
    })
}
mostrarDestinos();


/*json
const destinosInfo = {
    "argentina": {
        tematica: "comidas",
        tiempo: "14 dias",
        epoca: "primavera"
    },
    "portugal": {
        tematica: "calles",
        tiempo: "20 dias",
        epoca: "invierno"
    },
    "francia": {
        tematica: "museos",
        tiempo: "10 dias",
        epoca: "otoño"
    },
    "indonesia": {
        tematica: "playas",
        tiempo: "1 mes",
        epoca: "verano"
    }
}; */