function changeDonutImage (imageSrc) {
  html = `
  <img
    class="made-to-order-donut"
    src=${imageSrc}
    alt="made to order donut"
  />
`
  document.querySelector('.js-image-container').innerHTML = html;
};