import React from 'react';
import { Todo } from "../../actions/TodoActions";
import { RouteComponentProps, withRouter } from "react-router-dom";



interface Inter2{
    todos:Todo[],
    handleSubmit:(value:Todo) => void
}

export const EditTodo:React.StatelessComponent<Inter2 & RouteComponentProps<{id:string}>> = (props) =>{
    
    let id: HTMLInputElement;
    let name: HTMLInputElement;
    let completed: HTMLInputElement;

    // search the right todo
    let todo = props.todos.find(t => t.id === parseInt(props.match.params.id)) as Todo;

    return (
        <form onSubmit={e => {
            e.preventDefault();

            let t:Todo = { id: parseInt(id.value), name:name.value, completed:completed.checked};

            props.handleSubmit(t);
            props.history.push("/todos");
        }}>
        
            id:
            <div>
                <input type="text" 
                    value={todo.id} 
                    readOnly
                    ref={(node:HTMLInputElement) => { id= node }} />
            </div>

            name:
            <div>
                <input type="text" 
                    defaultValue={todo.name} 
                    ref={(node:HTMLInputElement) => { name= node }} />
            </div>

            completed:
            <div>
                <input type="checkbox" 
                    defaultChecked={todo.completed} 
                    ref={(node:HTMLInputElement) => { completed = node }} />
            </div>

            <button type="button" onClick= {(e) => props.history.push("/todos")}>Cancel</button>
            <button type="submit">Save</button>
        
        </form>
    )
}

export const EditTodoWR = withRouter(EditTodo);