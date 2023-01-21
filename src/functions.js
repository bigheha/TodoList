import { projects } from "./projects-logic";

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

//non-exported function, used to add delete button to a project tab (line 41)
function createDeleteBtn(index){
    const deleteButton = document.createElement('button');
    
    deleteButton.classList.add('deleteProjectBtn');
    deleteButton.innerHTML = 'delete';
    
    deleteButton.addEventListener('click', (e) => {
        const index = e.target.parentElement.getAttribute('data-number');
        projects.splice(index, 1);
        renderProjects(projects);
    });

    return deleteButton;
}

function renderProjects (projectslist) {
    const projectSpace = document.querySelector('#projectSpace');
    while(projectSpace.firstChild){
        projectSpace.removeChild(projectSpace.firstChild);
    }
    projectslist.forEach((entry, index) => {
        const project = document.createElement('p');
        const deleteButton = createDeleteBtn(index);

        project.setAttribute('data-number', index);
        project.innerHTML = entry.title;
        project.classList.add('projectButton');
        
        projectSpace.appendChild(project);
        project.appendChild(deleteButton);
    });
}

export {createOption, setFieldAttributes, renderProjects};