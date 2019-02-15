export enum ActionTypes{
    ADD_TODO='add_todo',
    SET_VISIBILITY_FILTER='visibility_filter',
    TOGGLE_TODO='toggle_todo',
    GET_TODOS='get_todos'
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

export interface SetVisibilityFilterAction {
    type:ActionTypes.SET_VISIBILITY_FILTER
    payload: { filter: string }
}

export interface ToggleTodoAction {
    type:ActionTypes.TOGGLE_TODO
    payload: { id: number }
}

export interface GetTodosAction {
    type:ActionTypes.GET_TODOS
    payload: { todos: Todo[] }
}

let nextTodoId = 0;
/*
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
*/

export const addTodo = (todo:Todo) : AddTodoAction => {
    return { 
        type: ActionTypes.ADD_TODO,
        payload: {
            todo:todo
        }
    }
}

export const SetVisibilityFilter = (filter:string) : SetVisibilityFilterAction => {
    return { 
        type: ActionTypes.SET_VISIBILITY_FILTER,
        payload: {
            filter: filter
        }
    }
}

export const ToggleTodo = (id:number) : ToggleTodoAction => {
    return { 
        type: ActionTypes.TOGGLE_TODO,
        payload: {
            id: id
        }
    }
}

export const getTodos = (todos:Todo[]) : GetTodosAction => {
    return { 
        type: ActionTypes.GET_TODOS,
        payload: { todos:todos }
    }
}

// union type
export type Action = AddTodoAction | SetVisibilityFilterAction | ToggleTodoAction | GetTodosAction
