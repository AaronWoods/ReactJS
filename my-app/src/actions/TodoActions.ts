export enum ActionTypes{
    ADD_TODO='add_todo'
}

export interface Todo{
    id:number,
    name:string,
    completed:boolean
}

// action creators
export interface AddTodoAction {
    type:ActionTypes.ADD_TODO
    payload: {todo:Todo}
}

let nextTodoId = 0;
export const addTodo = (name:string) : AddTodoAction => {
    return { 
        type: ActionTypes.ADD_TODO,
        payload: {
            todo:{
                id: nextTodoId++,
                name:name,
                completed:false
            }
        }
    }
}

// union type
export type Action = AddTodoAction