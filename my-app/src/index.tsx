import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<h1>Startup</h1>, document.getElementById('container'));

// Introduction to JSX
interface User{
    firstName: string,
    lastName: string
}

function formatName(user:User) {
    return user.firstName + ", " + user.lastName;
}

const user:User = {
    firstName:"Aaron",
    lastName:"Woods"
}

const element = (
    <h1>
        { formatName(user) }
    </h1>
)

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
