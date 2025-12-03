import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

type Priority = 'important' | 'default' | 'low';
type PriorityMapper = { [key: number]: Priority };



type Task = {
  id: number;
  title: string;
  completed: boolean;
  priority: Priority;
  userId?: number;
  dueDate: Date | null;
  lables: string[];
}

const inputTypes = ['checkbox', 'submit', 'date', 'number', 'text'] as const;
type InputType = (typeof inputTypes)[number];

function isInputType(typeOrTag: string): typeOrTag is InputType {
  return inputTypes.includes(typeOrTag as InputType);
}
// function createElement(
//   parent: HTMLElement,
//   type: InputType, 
//   placehoder?: string): HTMLInputElement;
// function createElement(
//   parent: HTMLElement,
//   tagName: keyof HTMLElementTagNameMap,
//   text?: string): HTMLElement;
// function createElement(
//   parent: HTMLElement,
//   typeOrTag: InputType | keyof HTMLElementTagNameMap,
//   text?: string) {

//     if(isInputType(typeOrTag)) {

//     } else {
//       // Erzeugen ein Neues HTML ELement mit dem tagName als Typ
//       const createdElement = document.createElement(typeOrTag);
//       // Überprüfen, ob ein text mitgegeben wurde, wenn ja, setzten wir ihn ins innerHTML
//       // if(text) {
//       //   createdElement.innerHTML = text;
//       // }
//       // Kurzschreibweise
//       text && (createdElement.innerHTML = text);

//       // Erzeugtes Element an das mitgegebene Parent Element anfügen
//       parent.appendChild(createdElement);
//       // Erzeugtes Element zurückgeben
//       return createdElement;
//     }
// }

function createElement(
  parent: HTMLElement,
  type: InputType,
  placehoder?: string
): HTMLInputElement;
function createElement(
  parent: HTMLElement,
  tagName: keyof HTMLElementTagNameMap,
  text?: string): HTMLElement;
function createElement(
  parent: HTMLElement,
  typeOrTagName: InputType | keyof HTMLElementTagNameMap,
  text?: string
): HTMLElement {

  if (isInputType(typeOrTagName)) {
    
    // Erzeugen wir ein neues INPUT HTML Element mit dem text als placeholder
    // und dem typeOrTagName als Input Typ
    const createdElement = document.createElement('input') as HTMLInputElement;
    createdElement.type = typeOrTagName;

    // Wenn ein placehoder als text mitgegeben wurde, setzen wir ihn
    text && (createdElement.setAttribute("placeholder", text))

    // Erzeugtes Element an das mitgegeben Parent Elemtn anfügen
    parent.appendChild(createdElement);
    // Erzeugtes Element zurückgeben
    return createdElement;

  } else {
    // Erzeugen ein Neues HTML ELement mit dem tagName als Typ
    const createdElement = document.createElement(typeOrTagName);
    // Überprüfen, ob ein text mitgegeben wurde, wenn ja, setzten wir ihn ins innerHTML
    // if(text) {
    //   createdElement.innerHTML = text;
    // }
    // Kurzschreibweise
    text && (createdElement.innerHTML = text);

    // Erzeugtes Element an das mitgegebene Parent Element anfügen
    parent.appendChild(createdElement);
    // Erzeugtes Element zurückgeben
    return createdElement;
  }
}




// Diesen Code Ersetzen durch verwendung von createElement
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <h1>Deine ToDo Liste</h1>
//   <ul id = "list">
//   </ul>  
//   <form>
//     <label>Aufgabe</label>
//     <input type="text" id="task" placeholder ="Aufgabe eingeben"/> <br>
//     <input type="date" id="due"/><br>
//     <label>Keywords</label>
//     <input type="text" id ="labels" placehoder ="Komma seperierte Liste"/><br>
//     <label>Priorität</label>
//     <input type="number" min="0" max="2" value="1" id="prio"/> <br>
//     <button id="submit" value="">Neue Aufgabe</button>
// </form>
// `
let appRoot = document.querySelector<HTMLDivElement>('#app');

// zweite Variante createElement
createElement(appRoot as HTMLElement, 'h1', "Deine ToDo Liste");
let uList = createElement(appRoot as HTMLElement, 'ul') as HTMLUListElement;
let form = createElement(appRoot as HTMLElement, 'form');
createElement(form, 'label', "Aufgabe");
// erste variante createElement
let inputTask = createElement(form, 'text', "Aufgabe eingeben");
createElement(form, 'label', 'Datum');
let inputDate = createElement(form, 'date');
createElement(form, 'label', 'Keywords');
let inputKeywords = createElement(form, 'text', 'Komma serperierte Liste');
createElement(form, 'label', 'Priortät');
let inputPrio = createElement(form, 'number');
inputPrio.setAttribute("min", "0");
inputPrio.setAttribute("max", "2");
inputPrio.setAttribute("value", "1");
let submitButton = createElement(form, "button", "Hinzufügen");


const taskList: Task[] = [];
const prioMapper: PriorityMapper = ['low', 'default', 'important'];

submitButton?.addEventListener('click', function (e) {
  // Default Submit action verhindern, welches Server Request auslöst
  e.preventDefault();
  
  const task: Task = {
    id: taskList.length + 1,
    userId: 0,
    title: inputTask.value,
    dueDate: inputDate.valueAsDate,
    lables: inputKeywords.value.split(","),
    completed: false,
    priority: prioMapper[inputPrio.valueAsNumber],
  };
  taskList.push(task);

  let listItem = createElement(uList, 'li') as HTMLLIElement;
  createElement(listItem, 'checkbox');
  createElement(listItem, 'span', task.title);
})

