export function iniciarSlider(params) {
  $(document).ready(function () {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
    });
  });
}
