const lightEl = document.querySelector('.light-icon');
const darkEl = document.querySelector('.dark-icon');

darkEl.addEventListener('click', () => {
  document.body.classList.remove('light');
  document.body.classList.add('dark');
});

lightEl.addEventListener('click', () => {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
});
