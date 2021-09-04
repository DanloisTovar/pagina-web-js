export function validar() {
  $("#formulario-contacto input[name='date']").datepicker({
    dateFormat: 'dd-mm-yy',
  });

  $('#formulario-contacto').validate({
    lang: 'es',
  });
}
