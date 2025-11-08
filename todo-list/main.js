const ulEl = document.querySelector('.todo-body__list');
const inputEl = document.querySelector('.input');
const btnEl = document.querySelector('.button');

const addItem = () => {
  if (inputEl.value === '') return;

  const li = document.createElement('li');
  li.setAttribute('class', 'todo-body__item');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');

  const span = document.createElement('span');
  const text = document.createTextNode(inputEl.value);
  span.appendChild(text);

  const i = document.createElement('i');
  i.setAttribute('class', 'fa-regular fa-square-minus');
  i.addEventListener('click', (e) => {
    e.currentTarget.parentElement.remove();
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(i);

  ulEl.appendChild(li);
  inputEl.value = '';
};

inputEl.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) addItem();
});
btnEl.addEventListener('click', addItem);
