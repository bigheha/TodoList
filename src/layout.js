import { newProjectForm, newTodoForm,showTodoFormBtn } from "./forms.js";

export default function renderLayout() {
    const body = document.querySelector('body');
    
    const grid = document.createElement('div');
    grid.classList.add('grid-container');
    body.appendChild(grid);

    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.innerText= 'Todo planet';
    header.appendChild(logo);

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const projectSpace = document.createElement('div');
    projectSpace.setAttribute('id', 'projectSpace');

    const showProjectFormBtn = document.createElement('button');
    showProjectFormBtn.setAttribute('id', 'showProjectFormBtn');
    showProjectFormBtn.innerText = 'New Project';
    showProjectFormBtn.addEventListener('click', () => {
        const newForm = document.querySelector('#newProjectForm'); //gets a newProjectForm element that is defined in forms.js
        newForm.classList.toggle('hidden');
        showProjectFormBtn.classList.toggle('hidden');
    });

    sidebar.append(projectSpace, newProjectForm, showProjectFormBtn);

    const content = document.createElement('div');
    content.classList.add('content');
    
    const contentSpace = document.createElement('div');
    contentSpace.classList.add('todos-grid');

    content.appendChild(contentSpace);

    const footer = document.createElement('div');
    footer.classList.add('footer');

    grid.append(header, sidebar, content, footer);
}