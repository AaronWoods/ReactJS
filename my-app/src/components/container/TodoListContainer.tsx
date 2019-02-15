import { connect } from "react-redux";
import { TodoList } from "../presentational/TodoList";
import { State } from "../../reducers/TodoReducers";

const mapStateToProps = (state:State) => {
    return{
        todos: state.todos
    }
}

export const TodoListContainer = connect(mapStateToProps, null)(TodoList);