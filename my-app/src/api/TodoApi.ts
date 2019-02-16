import { Todo } from "../actions/TodoActions";

//GET 
export function getTodosAPI() {
    return fetch('http://localhost:3500/todos');
}

//POST
export function addTodoAPI(t:Todo) {
    var data:any = { "name":t.name, "completed":t.completed }

    return fetch('http://localhost:3500/todos', {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    });
}

//POST
export function toggleTodoAPI(t:Todo) {
    
    var data:any =t;

    return fetch('http://localhost:3500/todos/' + t.id, {
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    });
}