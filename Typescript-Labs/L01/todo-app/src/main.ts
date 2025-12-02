import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Deine ToDo Liste</h1>
  <ul id = "list">
  </ul>  
  <form>
    <label>Aufgabe</label>
    <input type="text" id="task"/> <br>
    <button id="submit" value="">Neue Aufgabe</button>
</form>
`

const todoList = <HTMLUListElement>document.getElementById("list");
const taskInput = <HTMLInputElement>document.getElementById("task");
const submitButton = document.getElementById("submit");

submitButton?.addEventListener('click', function (e) {
  // Default Submit action verhindern, welches Server Request auslöst
  e.preventDefault();

  const listItem = document.createElement('li');
  listItem.innerText = taskInput.value;
  todoList.appendChild(listItem);
})

