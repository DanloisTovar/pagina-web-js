$('#login form').submit(function () {
  var nombre = $('#nombre_form').val();
  localStorage.setItem('nombre_form', nombre);
});

var nombre = localStorage.getItem('nombre_form');

if (nombre != null && nombre != 'undefined') {
  var about_parrafo = $('.about p');
  $('.about p').html(`<strong>Bienvenido ${nombre} </strong>`);
  about_parrafo.append('<a href="#" id="logout"> Cerrar sesion </a>');
  $('#login').hide();

  $('#logout').click(function () {
    /* limpiar localstorage */
    localStorage.clear();
    /* recargar pagina limpia */
    location.reload();
  });
}
