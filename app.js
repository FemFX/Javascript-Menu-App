const btn = document.querySelector('button');
const elements = document.querySelectorAll('input');
const outPrice = document.querySelector('#price');
const outKkal = document.querySelector('#kkal');

btn.addEventListener('click', () => {
  let price = 0;
  let kkal = 0;

  elements.forEach(element => {
    if (element.checked) {
      price += parseFloat(element.getAttribute('data-price'));
      kkal += parseFloat(element.getAttribute('data-kkal'));
    }
  });
  outPrice.innerHTML = price;
  outKkal.innerHTML = kkal;
});
