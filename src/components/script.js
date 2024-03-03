$(document).ready(function() {
  $('.inicio-button2').on('click', function(event) {
    event.preventDefault();

    let nombre = $('.inicio-textinput').val();
    let correo = $('.inicio-textinput1').val();

    // Enviar datos al servidor
    $.ajax({
      type: 'POST',
      url: '/inicio.js',
      data: {nombre: nombre, correo: correo},
      success: function(response) {
        // Manejo de la respuesta del servidor
        console.log(response);
        // Por ejemplo, mostrar un mensaje de éxito al usuario
        alert('¡Gracias por suscribirte al newsletter!');
      },
      error: function(error) {
        // Manejo de errores
        console.error('Error al suscribirse: ', error);
        // Por ejemplo, mostrar un mensaje de error al usuario
        alert('Ocurrió un error al suscribirte al newsletter. Por favor, inténtalo de nuevo.');
      }
    });
  });
});
