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
            imageUrl: '../img/avionpapel.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Animacion avion',
        });

        console.log(localStorage.getItem('formularioData'));
    } catch (error) {
        console.error(error);
    }
});

