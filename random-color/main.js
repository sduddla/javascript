const btnEl = document.querySelector('#changeButton');

btnEl.addEventListener('click', function () {
  const randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16);

  // console.log(randomColor);

  document.body.style.backgroundColor = randomColor;
  this.previousElementSibling.textContent = randomColor;
  btnEl.style.color = randomColor;
});
