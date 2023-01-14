const newProjectForm = document.createElement('form');
const projectTitleField = document.createElement('input');
setAttributes(projectTitleField, 'text', 'projectTitle');

const addProjectBtn = document.createElement('input');
addProjectBtn.setAttribute('type', 'input');

newProjectForm.append(projectTitleField, addProjectBtn);

const newTodoForm = document.createElement('form');

const todoTitleField = document.createElement('input');
setAttributes(todoTitleField, 'text', 'todoTitle');
const todoDescriptionField = document.createElement('input');
setAttributes(todoDescriptionField, 'text', 'todoDescription');
const todoDueDateField = document.createElement('input');
setAttributes(todoDueDateField, 'date', 'todoDueDate');

const todoPriorityField = document.createElement('select');
todoPriorityField.setAttribute('id', 'todoPriority');

const lowPriority = document.createElement('option');
lowPriority.setAttribute('value', 'low priority');
lowPriority.innerHTML = 'low priority';
todoPriorityField.appendChild(lowPriority);

const regularPriority = document.createElement('option');
regularPriority.setAttribute('value', 'regular priority');
regularPriority.innerHTML = 'regular priority';
todoPriorityField.appendChild(regularPriority);

const highPriority = document.createElement('option');
highPriority.setAttribute('value', 'high priority');
highPriority.innerHTML = 'high priority'
todoPriorityField.appendChild(highPriority);

const addTodoBtn = document.createElement('input');
addTodoBtn.setAttribute('type', 'submit');

newTodoForm.append(
    todoTitleField, todoDescriptionField, 
    todoDueDateField, todoPriorityField, addTodoBtn
);

export {newProjectForm, newTodoForm};

function setAttributes (element, type, idAndName) {
    element.setAttribute('type', type);
    element.setAttribute('id', idAndName);
    element.setAttribute('name', idAndName);
}