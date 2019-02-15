import React from 'react';
import { AddTodo } from './AddTodo';
import { AddToContainer } from '../container/AddTodoContainer';
import { TodoListContainer } from '../container/TodoListContainer';
import { Footer } from './Footer';
export const App = () : JSX.Element => (
    <div>
        <AddToContainer/>
        <TodoListContainer />
        <Footer />
    </div>
)