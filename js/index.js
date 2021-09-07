/* lottie (imagenes animadas) */
import {} from '../js/lotttie.js';
/* slider: */
import { iniciarSlider } from '../js/slider.js';
/* post: */
import { monstarPost } from '../js/post.js';
/* cambiar a tema oscuro: */
import {} from './cambiartema.js';

/* scrollALtop */
import {} from './alTop.js';

/* login formulario: */
import {} from './loginFalso.js';

/* acordeon: */
import { Acordeon } from './Acordeon.js';

/* reloj: */
import { imprimirReloj } from './reloj.js';

/* importar validacion: */
import { validar } from './validacion.js';
iniciarSlider();
monstarPost();
if (window.location.href.indexOf('index') > -1) {
  monstarPost();
}
if (window.location.href.indexOf('sobre-mi') > -1) {
  Acordeon();
}

if (window.location.href.indexOf('reloj') > -1) {
  imprimirReloj();
}

if (window.location.href.indexOf('contacto') > -1) {
  validar();
}
