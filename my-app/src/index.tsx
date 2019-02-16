import React, { Component } from 'react';
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
/*
let store = createStore(todoApp, applyMiddleware(thunk.withExtraArgument("....")));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
document.getElementById('container'));
*/

// HOC: function

const LoadWebSite = (Component:any) => {
    class _LoadWebSite extends React.Component<any, any>{

        constructor(props:any){
            super(props);

            this.state = { label:"Run", handleClick:this.handleClick.bind(this)}
        }
        
        getUrl(){
            //return 'https://www.google.com'
            return 'http://localhost:3500/todos';
        }

        handleClick(event:any) {
            (document.getElementById("frame") as HTMLFrameElement).src =this.getUrl();
        }

        render(){
            return <Component {...this.props} {...this.state} />
        }



    }

    return _LoadWebSite;
}

class Button extends React.Component<any>{

    render(){
        return (
            <button
                onClick={this.props.handleClick}>
                {this.props.label}
            </button>
        )
    }
}

const EnhanceButton = LoadWebSite(Button);

class Content extends React.Component{
    
    render(){
        return (
            <div>
                <EnhanceButton />
                <br />
                <iframe id="frame" src="" width="500" height="500"/>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Content />
    </div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
