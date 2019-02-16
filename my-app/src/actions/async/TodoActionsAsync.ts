import { getTodosAPI, addTodoAPI, toggleTodoAPI, deleteTodoAPI } from "../../api/TodoApi";
import { getTodos, Todo, addTodo } from "../TodoActions";

export const getTodosAsync = (): any => {
    return async function (dispatch:any) : Promise<void>{
        return getTodosAPI()
        .then(function(response){
            return response.json();
        })
        .then(function(myJSON){
            console.log(JSON.stringify(myJSON));

            dispatch(getTodos(myJSON));
        })
    }
}

export const addTodoAsync = (t:Todo): any => {
    return async function (dispatch:any) : Promise<void>{
        return addTodoAPI(t)
        .then(function(response){
            return response.json();
        })
        .then(function(myJSON){
            console.log(JSON.stringify(myJSON));

            dispatch(addTodo(myJSON));
        })
    }
}

export const toggleTodoAsync = (t:Todo): any => {

    t.completed = !t.completed;

    return async function (dispatch:any) : Promise<void>{
        return toggleTodoAPI(t)
        .then(function(response){
            return response.json();
        })
        .then(function(myJSON){
            console.log(JSON.stringify(myJSON));

            //dispatch(addTodo(myJSON));
            dispatch(getTodosAsync());
        })
    }
}

export const deleteTodoAsync = (id:number): any => {

    return async function (dispatch:any) : Promise<void>{
        return deleteTodoAPI(id)
        .then(function(response){
            return response.json();
        })
        .then(function(myJSON){
            console.log(JSON.stringify(myJSON));

            //dispatch(addTodo(myJSON));
            dispatch(getTodosAsync());
        })
    }
}