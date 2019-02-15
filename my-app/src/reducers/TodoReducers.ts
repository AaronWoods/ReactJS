import { Action, Todo, ActionTypes } from "../actions/TodoActions";
import { combineReducers } from "redux";

export interface State {
    todos:Todo[],
    visibilityFilter:string
}

const initialState:State = {
    todos:[],
    visibilityFilter:'SHOW_ALL'
}

// reducers
export const todosAction = (state:Todo[] = [], action:Action) => {

    console.log(state + " " + action.type);

    switch(action.type){
        case ActionTypes.ADD_TODO:{
            const todo = action.payload.todo;

            return [
                ...state,
                {
                    id: todo.id,
                    name:todo.name,
                    completed: todo.completed
                }
            ]
        }

        case ActionTypes.TOGGLE_TODO: {
            return state.map( todo => (todo.id == action.payload.id ) ? { ...todo, completed:!todo.completed} : todo )
        }

        default:
            return state;
    }
}

export const visibilityFilter = (state:string='SHOW_ALL', action:Action) => {

    console.log(action.payload);

    switch(action.type){
        case ActionTypes.SET_VISIBILITY_FILTER:
            return action.payload.filter;

        default:
            return state;
    }

}



export const todoApp = combineReducers( { todos: todosAction , visibilityFilter })
