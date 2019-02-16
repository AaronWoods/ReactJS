import { State } from "../../reducers/TodoReducers";
import { connect } from "react-redux";
import { updateTodoAsync } from "../../actions/async/TodoActionsAsync";
import { EditTodoWR } from "../presentational/EditTodo";

const mapStateToProps = (state:State) => {
    return {
        todos: state.todos
    }
}

export const EditTodoContainer = connect(mapStateToProps, { handleSubmit: updateTodoAsync})(EditTodoWR);