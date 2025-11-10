const formEl = document.querySelector('#todo-form');
const inputEl = document.querySelector('#todo-text');
const ulEl = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function addTodo(newTodo) {
  const li = document.createElement('li');
  li.setAttribute('id', newTodo.id);

  const div = document.createElement('div');
  div.classList.add('todo-left');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');

  const span = document.createElement('span');
  span.textContent = newTodo.text;

  div.appendChild(input);
  div.appendChild(span);

  const i = document.createElement('i');
  i.setAttribute('class', 'todo-button fa-regular fa-square-minus');
  i.addEventListener('click', deleteTodo);

  li.appendChild(div);
  li.appendChild(i);
  ulEl.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();

  const todo = inputEl.value;
  inputEl.value = '';

  const newTodo = {
    text: todo,
    id: Date.now(),
  };

  todos.push(newTodo);
  addTodo(newTodo);
  saveTodos();
}

formEl.addEventListener('submit', handleSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(addTodo);
}
