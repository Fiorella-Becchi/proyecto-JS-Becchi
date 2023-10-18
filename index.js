const datosAdicionales = [];
const formulario = document.getElementById('miFormulario');

// Elementos del formulario
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const suscripcionCheckbox = document.getElementById('suscripcion');

// Función para guardar los datos en localStorage como una promesa

function guardarDatosEnLocalStorage(formDataString) {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem('formularioData', formDataString);
            resolve('Datos guardados en localStorage con éxito');
        } catch (error) {
            reject('Error al guardar los datos en localStorage');
        }
    });
}

// Evento de envío de formulario
document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Valores ingresados por el usuario
    const nombre = nombreInput.value;
    const email = emailInput.value;
    const mensaje = mensajeInput.value;
    const suscripcion = suscripcionCheckbox.checked;

    // Alerta de error si los campos están vacíos
    if (!nombre || !email || !mensaje) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, complete todos los campos del formulario',
            icon: 'error',
        });
        return;
    }

    // Opción de suscripción seleccionada a datosAdicionales
    datosAdicionales.push(suscripcion ? 'Usuario suscrito' : 'Usuario no suscrito');

    // Objeto JSON con los datos del formulario
    const formData = {
        nombre,
        email,
        mensaje,
        suscripcion,
    };

    // Convertir el objeto JSON a una cadena
    const formDataString = JSON.stringify(formData);

    // Guardar los datos en localStorage de forma asincrónica
    try {
        const resultado = await guardarDatosEnLocalStorage(formDataString);
        console.log(resultado);

        // Mostrar un alert con libreria
        Swal.fire({
            title: 'Listo!',
            text: 'Vida Nomade',
            imageUrl: './img/avionpapel.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Animacion avion',
        });

        console.log(localStorage.getItem('formularioData'));
    } catch (error) {
        console.error(error);
    }
});

// API con Console Maps Platform de Google

function inicializarMapa() {
    // Coordenadas para Ibiza
    const coordenadasIbiza = { lat: 38.902847599999994, lng: 1.4090239999999998 };

    // Opciones del mapa
    const opcionesMapa = {
        center: coordenadasIbiza,
        zoom: 15,
    };

    const mapa = new google.maps.Map(document.getElementById('mapa'), opcionesMapa);

    // Marcador para la ubicación
    const marcador = new google.maps.Marker({
        position: coordenadasIbiza,
        map: mapa,
        title: 'Ibiza, España',
    });
}

// Hidden en el mapa
const mapaContainer = document.getElementById('mapaContainer');
const ocultarMapaBtn = document.getElementById('ocultarMapa');
const mostrarMapaBtn = document.getElementById('mostrarMapa');

ocultarMapaBtn.addEventListener('click', function () {
    mapaContainer.setAttribute('hidden', true);
});

mostrarMapaBtn.addEventListener('click', function () {
    mapaContainer.removeAttribute('hidden');
});



//Por último, falta la carga de datos (que podía ser utilizando un fetch a una API externa) donde se carguen o descarguen datos. Esto es importante porque en el proyecto no hay estructuras de datos de ningún tipo (No hay objetos ni arrays) que es otro punto requerido. 

