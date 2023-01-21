export class Project {
    constructor(title) {
        this.title = title;
        this.todolist = [];
    }
    
}
export class Todo {
    constructor (title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }
}
export const projects = [
    {
        title: 'first project',
        todolist: []
    },
];

