export enum ActionTypes{
    ADD_TODO='add_todo',
    SET_VISIBILITY_FILTER='visibility_filter',
    TOGGLE_TODO='toggle_todo'
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

// union type
export type Action = AddTodoAction | SetVisibilityFilterAction | ToggleTodoAction
