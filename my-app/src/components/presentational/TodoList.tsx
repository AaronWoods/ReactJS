import React from 'react';
import { TodoItem } from "./TodoItem";
import { Todo } from "../../actions/TodoActions";

/*
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
*/

/*
export const TodoList:React.FC<{todos:Todo[], onTodoClick:(id:Todo) => void }> = props => {

    return (
        <ul>
            {props.todos.map(( todo: Todo ) => (
                <TodoItem 
                    key={todo.id}
                    name={todo.name}
                    completed={todo.completed}
                    onClick={() => props.onTodoClick(todo)}
                />
            ))}
        </ul>
    )
}
*/

export const TodoList:React.FC<{todos:Todo[], onTodoClick:(id:Todo) => void , onTodoClickDelete:(id:number) => void}> = props => {

    return (
        <table>
            {props.todos.map(( todo: Todo ) => (
                <TodoItem 
                    key={todo.id}
                    name={todo.name}
                    completed={todo.completed}
                    onClick={() => props.onTodoClick(todo) }
                    onClickDelete={() => props.onTodoClickDelete(todo.id)}
                />
            ))}
        </table>
    )
}