import { connect } from "react-redux";
import { TodoList } from "../presentational/TodoList";
import { State } from "../../reducers/TodoReducers";
import { Todo, ToggleTodo } from "../../actions/TodoActions";

const getVisibleTodos = ( todos:Todo[], filter:string)=> {
    switch(filter) {
        case "SHOW_ALL":
            return todos;

        case "SHOW_COMPLETED":
            return todos.filter(t=> t.completed);
        
        case "SHOW_ACTIVE":
            return todos.filter(t=> !t.completed);

        default:
            return todos;
    }

}

const mapStateToProps = (state:State) => {
    return{
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDespatchToProps = (dispatch:any) => {
    return {
        onTodoClick:(id:number) => {dispatch(ToggleTodo(id))}
    }
}

export const TodoListContainer = connect(mapStateToProps, mapDespatchToProps)(TodoList);