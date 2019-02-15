import { Todo } from "../actions/TodoActions";

//GET 
export function getTodosAPI() {
    return fetch('http://localhost:3500/todos');
}

//POST
export function addTodoAPI(t:Todo) {
    var data:any = { "name":t.name, "complated":t.completed }

    return fetch('http://localhost:3500/todos', {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    });
}