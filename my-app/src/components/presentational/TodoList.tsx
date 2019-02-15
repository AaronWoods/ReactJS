import React from 'react';
import { TodoItem } from "./TodoItem";
import { Todo } from "../../actions/TodoActions";

export const TodoList:React.FC<{todos:Todo[], onTodoClick:(id:number) => void }> = props => {

    return (
        <ul>
            {props.todos.map(( todo: Todo ) => (
                <TodoItem 
                    key={todo.id}
                    name={todo.name}
                    completed={todo.completed}
                    onClick={() => props.onTodoClick(todo.id)}
                />
            ))}
        </ul>
    )
}