import { projectsHolder } from "./projects-logic";

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

function renderTodos (id) {
    const todoSpace = document.querySelector('.todos-grid');
    
    const targetProject = projectsHolder.list[id];
    const todos = targetProject.todolist;

    todos.forEach((todo, index) => {
        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');
        todoCard.setAttribute('data-number', 'index');
        
        const todoTitle = todo.title;
        const todoDescription = todo.description;
        const duedate = todo.duedate;
        const priority = todo.priority;

        todoCard.append(todoTitle, todoDescription, duedate, priority);

        todoSpace.appendChild(todoCard);
    })

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
}

export {createOption, setFieldAttributes, renderProjects, renderTodos};