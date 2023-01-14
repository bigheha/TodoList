const newProjectForm = document.createElement('form');

const projectTitleField = document.createElement('input');
setFieldAttributes(projectTitleField, 'text', 'projectTitle');
const addProjectBtn = document.createElement('input');
addProjectBtn.setAttribute('type', 'input');

newProjectForm.append(projectTitleField, addProjectBtn);

const newTodoForm = document.createElement('form');

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
newTodoForm.append(
    todoTitleField, todoDescriptionField, 
    todoDueDateField, todoPriorityField, addTodoBtn
);

export {newProjectForm, newTodoForm};

function createOption(valueAndText) {
    const option = document.createElement('option');
    option.setAttribute('value', valueAndText);
    option.innerHTML = valueAndText;
    return option;
}
function setFieldAttributes (element, type, idAndName) {
    element.setAttribute('type', type);
    element.setAttribute('id', idAndName);
    element.setAttribute('name', idAndName);
}