let tema = $('#tema').attr('href', 'css/styles.css');

$('#modoDark').click(function () {
  var cambio = tema.attr('href', 'css/modoDark.css');
});

$('#modoBlanco').click(function () {
  tema.attr('href', 'css/styles.css');
});
