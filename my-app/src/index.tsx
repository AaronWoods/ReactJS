import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './components/presentational/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { todoApp } from './reducers/TodoReducers';
import { Provider } from 'react-redux';

// Entry Point: we create a store, a Redux object responsible for invoking the reducers
let store = createStore(todoApp);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
