import { connect } from "react-redux";
import { addTodo } from "../../actions/TodoActions";
import { AddTodo } from "../presentational/AddTodo";
import { addTodoAsync } from "../../actions/async/TodoActionsAsync";


export const AddToContainer = connect(null, {
    handleSubmit:addTodoAsync
})(AddTodo)