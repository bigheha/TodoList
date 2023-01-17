import { createOption, setFieldAttributes } from "./functions";

const newProjectForm = document.createElement('form');
newProjectForm.classList.add('hidden');

const projectTitleField = document.createElement('input');
setFieldAttributes(projectTitleField, 'text', 'projectTitle');
const addProjectBtn = document.createElement('input');
addProjectBtn.setAttribute('type', 'input');
addProjectBtn.addEventListener('click', () => newProjectForm.classList.add('hidden'));
newProjectForm.append(projectTitleField, addProjectBtn);

const newTodoForm = document.createElement('form');
newTodoForm.classList.add('hidden');

const todoTitleField = document.createElement('input');
setFieldAttributes(todoTitleField, 'text', 'todoTitle');
const todoDescriptionField = document.createElement('input');
setFieldAttributes(todoDescriptionField, 'text', 'todoDescription');
const todoDueDateField = document.createElement('input');
setFieldAttributes(todoDueDateField, 'date', 'todoDueDate');

const todoPriorityField = document.createElement('select');
todoPriorityField.setAttribute('id', 'todoPriority');
const lowPriority = createOption('low priority');
const regularPriority = createOption('regular priority');
const highPriority = createOption('high priority');
todoPriorityField.append(lowPriority, regularPriority, highPriority);

const addTodoBtn = document.createElement('input');
addTodoBtn.setAttribute('type', 'submit');
addTodoBtn.addEventListener('click', () => newTodoForm.classList.add('hidden'));
newTodoForm.append(
    todoTitleField, todoDescriptionField, 
    todoDueDateField, todoPriorityField, addTodoBtn
);

export {newProjectForm, newTodoForm};