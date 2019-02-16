import React from 'react';
import { AddTodo } from './AddTodo';
import { AddToContainer } from '../container/AddTodoContainer';
import { TodoListContainer } from '../container/TodoListContainer';
import { Footer } from './Footer';
import { HeaderApp } from './HeaderApp';

/*
export const App = () : JSX.Element => (
    <div>
        <AddToContainer/>
        <TodoListContainer />
        <Footer />
    </div>
)
*/
interface AppProps{
    getTodosAsync:any
}

export class App extends React.Component<AppProps>{
    constructor(props:AppProps){
        super(props);
    }

    componentDidMount(){
        this.props.getTodosAsync();
    }

    render(){
        return (
            <div>
                
                <AddToContainer/>
                <TodoListContainer />
                <Footer />
            </div>
        )
    }
}