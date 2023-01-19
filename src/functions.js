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
function renderProjects (projects) {
    const projectSpace = document.querySelector('#projectSpace');
    projects.forEach(entry => {
        const project = document.createElement('p');
        project.innerHTML = entry.title;
        project.classList.add('projectButton');
        projectSpace.appendChild(project);
    });
}
export {createOption, setFieldAttributes, renderProjects};