let nombreUsuario = prompt("¿Cuál es tu nombre?");
if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado:" + nombreUsuario);
}

// Declaracion variable para representar el calendario de viajes
const calendarioViajes = {
    '2023-08-22': 'Vacaciones de invierno en Mar del Plata',
    '2023-09-10': 'Aventura por las playas de Bali',
    '2023-12-31': 'Fin de año en Rio de Janeiro',
    '2023-01-15': 'Retiro espiritual en la India',
    
  };
  
  // Función para verificar la disponibilidad de una fecha
  function fechaDisponible(fecha) {
    return !calendarioViajes[fecha];
  }
  
  // Función para mostrar el calendario de viajes y solicitar una fecha
  function mostrarCalendarioYSolicitar() {
    console.log('Calendario de Viajes:');
    console.log(calendarioViajes);
  
    const fechaSeleccionada = prompt('Ingresa una fecha (AAAA-MM-DD) para verificar disponibilidad:');
    
    if (!fechaSeleccionada) {
      console.log('Fecha inválida.');
      return;
    }
  
    if (fechaDisponible(fechaSeleccionada)) {
      console.log('La fecha está disponible. ¿Deseas agregar un viaje?');
      const agregarViaje = prompt('Escribe "si" o "no":');
  
      if (agregarViaje.toLowerCase() === 'si') {
        const nombreViaje = prompt('Ingresa el nombre del viaje:');
        calendarioViajes[fechaSeleccionada] = nombreViaje;
        console.log(`Viaje "${nombreViaje}" agregado el ${fechaSeleccionada}.`);
      } else {
        console.log('Gracias por verificar la disponibilidad.');
      }
    } else {
      console.log(`La fecha ${fechaSeleccionada} no está disponible.`);
    }
  }

  // Ciclo
  while (true) {
    mostrarCalendarioYSolicitar();
    const continuar = prompt('¿Deseas verificar otra fecha? (escribe "si" o "no"):');
    
    if (continuar.toLowerCase() !== 'si') {
      console.log('¡Hasta luego!');
      break;
    }
  }
  
  // Ejecutar el simulador interactivo
  mostrarCalendarioYSolicitar();