import React from 'react';
import { TodoItem } from "./TodoItem";
import { Todo } from "../../actions/TodoActions";

export const TodoList:React.FC<{todos:any}> = props => {

    return (
        <ul>
            {props.todos.map(( todo: Todo ) => (
                <TodoItem 
                    key={todo.id}
                    name={todo.name}
                />
            ))}
        </ul>
    )
}