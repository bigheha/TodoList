import { projectsHolder } from "./projects-logic";
import { showTodoFormBtn } from "./forms";

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
    element.setAttribute('required', '');
}

function createDeleteTodoBtn() {
    const button = document.createElement('button');

    button.innerHTML = 'delete';
    button.addEventListener('click', (e) => {
        const index = e.target.parentElement.getAttribute('data-number');
        const selectedProject = projectsHolder.list[projectsHolder.selectedProject];
        selectedProject.todolist.splice(index, 1);
        renderTodos(projectsHolder.selectedProject);
    })

    return button;
}

function renderTodos (id) {
    const todoSpace = document.querySelector('.todos-grid');
    
    const targetProject = projectsHolder.list[id];
    const todos = targetProject.todolist;

    while(todoSpace.firstChild) {
        todoSpace.removeChild(todoSpace.firstChild);
    }
    todos.forEach((todo, index) => {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');
        todoCard.setAttribute('data-number', index);
        
        const todoTitle = document.createElement('p');
        todoTitle.innerHTML = todo.title;
        const todoDescription = document.createElement('p');
        todoDescription.innerHTML = todo.description;
        const duedate = document.createElement('p');
        duedate.innerHTML = todo.duedate;
        const priority = document.createElement('p');
        priority.innerHTML = todo.priority;
        const deleteButton = createDeleteTodoBtn();
        todoCard.append(todoTitle, todoDescription, duedate, priority, deleteButton);

        todoSpace.appendChild(todoCard);
    })
    todoSpace.appendChild(showTodoFormBtn);

}

//non-exported function, used to add delete button to a project tab (line 41)
function createDeleteProjectBtn(index){
    const deleteButton = document.createElement('button');
    
    deleteButton.classList.add('deleteProjectBtn');
    deleteButton.innerHTML = 'delete';
    
    deleteButton.addEventListener('click', (e) => {
        const index = e.target.parentElement.getAttribute('data-number');
        projectsHolder.list.splice(index, 1);
        renderProjects(projectsHolder.list);
    });

    return deleteButton;
}

//non-exported function, used to add functionality to project tabs aka project buttons and renders Todo's of selected project
function AddTodoRendering () {
    const projectButtons = document.querySelectorAll('.projectButton');
    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            projectsHolder.selectedProject = e.target.getAttribute('data-number');
            renderTodos(projectsHolder.selectedProject);
        })
    })
};

function renderProjects (projectslist) {
    const projectSpace = document.querySelector('#projectSpace');
    while(projectSpace.firstChild){
        projectSpace.removeChild(projectSpace.firstChild);
    }
    projectslist.forEach((entry, index) => {
        const project = document.createElement('p');
        const deleteButton = createDeleteProjectBtn(index);

        project.setAttribute('data-number', index);
        project.innerHTML = entry.title;
        project.classList.add('projectButton');
        
        projectSpace.appendChild(project);
        project.appendChild(deleteButton);
    });
    AddTodoRendering();
    renderTodos(projectsHolder.selectedProject);
}

export {createOption, setFieldAttributes, renderProjects, renderTodos};