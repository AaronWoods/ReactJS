import { Action, Todo, ActionTypes } from "../actions/TodoActions";
import { combineReducers } from "redux";

export interface State {
    todos:Todo[]
}

const initialState:State = {
    todos:[]
}

// reducers
export const todosAction = (state:State=initialState, action:Action) => {
    switch(action.type){
        case ActionTypes.ADD_TODO:{
            const todo = action.payload.todo;

            return {
                ...state,
                todos: [ ...state.todos, todo]
            }
        }

        default:
            return state;
    }
}

export const todoApp = combineReducers( { todos: todosAction });
