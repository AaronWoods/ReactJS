import { connect } from "react-redux";
import { addTodo } from "../../actions/TodoActions";
import { AddTodo } from "../presentational/AddTodo";


export const AddToContainer = connect(null, {
    handleSubmit:addTodo
})(AddTodo)