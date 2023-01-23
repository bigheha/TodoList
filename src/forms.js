import { createOption, setFieldAttributes, renderTodos } from "./functions";
import {Project,Todo, projectsHolder} from "./projects-logic.js";
import { renderProjects } from "./functions";

//new project form definition
const newProjectForm = document.createElement('form');
newProjectForm.setAttribute('id', 'newProjectForm');
newProjectForm.classList.add('hidden');

const projectTitleField = document.createElement('input');
setFieldAttributes(projectTitleField, 'text', 'projectTitle');

const addProjectBtn = document.createElement('input');
addProjectBtn.setAttribute('type', 'submit');
newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const project = new Project(document.getElementById('projectTitle').value); 
    projectsHolder.list.push(project);
    renderProjects(projectsHolder.list);
    const newForm = document.querySelector('#showProjectFormBtn'); //gets a button element that shows project form, defined in layout.js
    newProjectForm.classList.toggle('hidden');
    newForm.classList.toggle('hidden');
});
newProjectForm.append(projectTitleField, addProjectBtn);

//new todo task form definition
const newTodoForm = document.createElement('form');
newTodoForm.setAttribute('id', 'newTodoForm');
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
newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const todo = new Todo(
        document.getElementById('todoTitle').value,
        document.getElementById('todoDescription').value,
        document.getElementById('todoDueDate').value,
        document.getElementById('todoPriority').value
    );

    const index = projectsHolder.selectedProject;
    const selectedProject = projectsHolder.list[index];
    selectedProject.todolist.push(todo);
    
    renderTodos(index);
    
    const newForm = document.querySelector('#newTodoBtn'); //gets a button element that shows todo form, defined in layout.js
    newTodoForm.classList.toggle('hidden');
    newForm.classList.toggle('hidden');
});

newTodoForm.append(
    todoTitleField, todoDescriptionField, 
    todoDueDateField, todoPriorityField, addTodoBtn
);

const showTodoFormBtn = document.createElement('button');
showTodoFormBtn.setAttribute('id', 'newTodoBtn');
showTodoFormBtn.innerText = 'New Todo';
showTodoFormBtn.addEventListener('click', () => {
    const newForm = document.querySelector('#newTodoForm'); //gets a newTodoForm element defined in forms.js
    newForm.classList.toggle('hidden');
    showTodoFormBtn.classList.toggle('hidden');
})

export {newProjectForm, newTodoForm, showTodoFormBtn};