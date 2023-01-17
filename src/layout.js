

export default function renderLayout() {
    const body = document.querySelector('body');
    
    const grid = document.createElement('div');
    grid.classList.add('grid-container');
    body.appendChild(grid);

    const header = document.createElement('div');
    header.classList.add('header');

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const content = document.createElement('div');
    content.classList.add('content');

    const footer = document.createElement('div');
    footer.classList.add('footer');

    grid.append(header, sidebar, content, footer);
}