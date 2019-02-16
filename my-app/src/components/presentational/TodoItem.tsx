import React from 'react';

/*
export const TodoItem:React.FC<{completed:boolean, name:string, onClick:() => void}> = props => {

    return (
        <li
        onClick={props.onClick}
        style={{
            textDecoration: props.completed ? 'line-through' : 'none'
        }}
        
        >
            {props.name}
        </li>
    )
}
*/

export const TodoItem:React.FC<{completed:boolean, name:string, onClick:() => void, onClickDelete:() => void, onClickEdit:() => void}> = props => {

    return (
        <tr>
            <td
            onClick={props.onClick}
            style={{
                textDecoration: props.completed ? 'line-through' : 'none'
            }}
            >
        
        
            {props.name}
            </td>
            <td>
                <button onClick={(e) => { props.onClickEdit()}}>Edit</button>
            </td>
            <td>
                <button onClick={(e) => { props.onClickDelete()}}>Delete</button>
            </td>
        </tr>
    )
}