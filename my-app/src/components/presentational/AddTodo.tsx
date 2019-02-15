import React from 'react';

interface Props{
    handleSubmit: (value:string) => void
}

export const AddTodo = (props:Props) : JSX.Element => {

    let input:HTMLInputElement;
    return (
        <div>
            <form onSubmit= {e => {
                e.preventDefault();
                if(!input.value.trim()){
                    return;
                }
                
                //dispatch a Redux action creators
                props.handleSubmit(input.value);
                input.value='';
            }}>
                <input ref={ ( node:HTMLInputElement ) => input = node } />
                <button type="submit">Add todo</button>
            </form>
        </div>
    )
}