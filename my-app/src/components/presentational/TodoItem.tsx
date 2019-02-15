import React from 'react';
export const TodoItem:React.FC<{name:string}> = props => {

    return (
        <li>
            {props.name}
        </li>
    )
}