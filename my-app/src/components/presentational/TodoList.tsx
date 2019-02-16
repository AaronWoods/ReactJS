import React from 'react';
import { TodoItem } from "./TodoItem";
import { Todo } from "../../actions/TodoActions";
import { RouteComponentProps, withRouter } from 'react-router-dom';

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

interface Props1 {
    todos:Todo[];
     onTodoClick:(id:Todo) => void;
     onTodoClickDelete:(id:number) => void;
}


// mixins between local and router properties
export const TodoList:React.FC<Props1 & RouteComponentProps<{}>> = props => {
    function navigate(id:number){
        console.log("in navigate: " + id);

        //now we have to push to history object
        props.history.push("/edit/" + id)

    }

    return (
        <table>
            <tbody>
                {props.todos.map(( todo: Todo ) => (
                    <TodoItem 
                        key={todo.id}
                        name={todo.name}
                        completed={todo.completed}
                        onClick={() => props.onTodoClick(todo) }
                        onClickDelete={() => props.onTodoClickDelete(todo.id)}
                        onClickEdit={() => navigate(todo.id)}
                    />
                ))}
            </tbody>
        </table>
    )
}

export const TodoListWR = withRouter(TodoList);