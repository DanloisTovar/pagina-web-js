export function imprimirReloj() {
  /* mostar cada segundo: */
  setInterval(() => {
    let reloj = moment().format('hh:mm:ss');
    $('#reloj').html(reloj);
  }, 1000);
}
