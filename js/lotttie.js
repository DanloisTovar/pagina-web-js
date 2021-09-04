/* Tollie-imagenes: */
const logoAnimacion = document.getElementsByClassName('logotipo');
const imagenQuienSoy = document.getElementsByClassName('quien-soy-img');
const imagenContacto = document.getElementsByClassName('contacto');

const anima = lottie.loadAnimation({
  container: logoAnimacion[0], // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/lottie/developer.json', // the path to the animation json
});

const anima2 = lottie.loadAnimation({
  container: imagenQuienSoy[0], // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/lottie/developer2.json', // the path to the animation json
});

const anima3 = lottie.loadAnimation({
  container: imagenContacto[0], // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/lottie/pass.json', // the path to the animation json
});
