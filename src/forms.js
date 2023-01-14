const newProjectForm = document.createElement('form');

const projectTitleField = document.createElement('input');
projectTitleField.setAttribute('type', 'text');
projectTitleField.setAttribute('id', 'projectTitle');
projectTitleField.setAttribute('name', 'projectTitle');
const addProjectBtn = document.createElement('input');
addProjectBtn.setAttribute('type', 'input');
newProjectForm.appendChild(projectTitleField);
newProjectForm.appendChild(addProjectBtn);

const newTodoForm = document.createElement('form');

const todoTitleField = document.createElement('input');
todoTitleField.setAttribute('type', 'text');
todoTitleField.setAttribute('id', 'todoTitle');
todoTitleField.setAttribute('name', 'todoTitle');
const todoDescriptionField = document.createElement('input');
todoDescriptionField.setAttribute('type', 'text');
todoDescriptionField.setAttribute('id', 'todoDescription'),
todoDescriptionField.setAttribute('name', 'todoDescription');
const todoDueDateField = document.createElement('input');
todoDueDateField.setAttribute('type', 'date');
todoDueDateField.setAttribute('id', 'todoDueDate');
todoDueDateField.setAttribute('name', 'todoDueDate');

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

newTodoForm.appendChild(todoTitleField);
newTodoForm.appendChild(todoDescriptionField);
newTodoForm.appendChild(todoDueDateField);
newTodoForm.appendChild(todoPriorityField);

export {newProjectForm, newTodoForm};

