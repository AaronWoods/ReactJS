import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './components/presentational/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { todoApp } from './reducers/TodoReducers';
import { Provider } from 'react-redux';
import { AppContainer } from './components/container/AppContainer';

import thunk from 'redux-thunk';
import { AppRouter } from './routing/AppRouter';

// Entry Point: we create a store, a Redux object responsible for invoking the reducers
//let store = createStore(todoApp);
let store = createStore(todoApp, applyMiddleware(thunk.withExtraArgument("....")));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
document.getElementById('container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
