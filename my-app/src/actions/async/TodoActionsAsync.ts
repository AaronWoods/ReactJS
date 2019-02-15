import { getTodosAPI, addTodoAPI } from "../../api/TodoApi";
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