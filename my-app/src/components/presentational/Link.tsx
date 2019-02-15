import React from 'react';
export const Link:React.FC<{active:boolean, onClick:()=>void}> = props => {

    if(props.active){
        return <span>{props.children}</span>
    }

    return (
        <a href="#" 
            onClick={e=> {
                e.preventDefault;
                props.onClick() 
            }
        }>
        {props.children}
        </a>
    )
}