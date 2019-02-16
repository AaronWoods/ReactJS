import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import { App } from './components/presentational/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { todoApp } from './reducers/TodoReducers';
import { Provider } from 'react-redux';
import { AppContainer } from './components/container/AppContainer';

import thunk from 'redux-thunk';
import { AppRouter } from './routing/AppRouter';
import { throws } from 'assert';

import {Link} from './testing/Link'
import { CheckboxWithLabel } from './testing/CheckboxWithLabel';

// class Cat extends React.Component<any,any>{

//     render(){
//         const mouse = this.props.mouse;
//         return (
//             <div>
//                 {mouse.x} {mouse.y}
//             </div>
            
//         )
        
//     }
// }

// //render prop: another possibility to reuse code
// class Mouse extends React.Component<any,any>{
//     constructor(props:any){
//         super(props);

//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x:0, y:0}
//     }

//     handleMouseMove(e:any){
//         this.setState({
//             x:e.clientX, y:e.clientY
//         })
//     }

//     render(){
//         return (
//             <div 
//                 style={ {height: '100%', width:'100%'}} 
//                 onMouseMove= {this.handleMouseMove}
//             >
//                 {this.props.render(this.state)}
//             </div>
//         )
//     }
// }

// class MouseTracker extends React.Component{
//     render(){
//         return (
//             <div>
//                 <Mouse 
//                     render={(mouse:any) => (
//                         <Cat 
//                             mouse={mouse} 
//                         />
//                     )}
//                 />
//             </div>
//         )
//     }
// }


//the following is responsible for managing errors that will come from children in render methods
interface Err{
    error: any,
    errorInfo:any    
}

class ErrorBoundary extends React.Component<any, Err>{
    constructor(props:any){
        super(props);

        this.state = { error:null, errorInfo:null }
    }

    componentDidCatch(error:any, errorInfo:any){
        this.setState({
            error:error,
            errorInfo:errorInfo
        })
    }

    render(){
        if(this.state.errorInfo){
            return (
                <div>
                    { this.state.error && this.state.error.toString() }
                    { this.state.errorInfo.componentStack }
                </div>
            )
        }
        return this.props.children;
    }
}

class FailureComponent1 extends React.Component{
    componentDidCatch(){
        console.log("in local componentDidCatch");
    }
    
    render(){
        if(true)
            throw new Error("I crashed")
        

        return <button onClick={(e) => { 
            try {
                throw new Error("In handler")
            }catch(e) {
                console.log("Manage");
            }
        }}>ERROR</button>    
    }
}

class GoodComponent2 extends React.Component{
    render(){
        return <h1>Genuine</h1>    
    }
}

function App(){
    return (
        <div>
            <ErrorBoundary>
                <FailureComponent1 />
                <GoodComponent2 />
            </ErrorBoundary>
            <ErrorBoundary>
                <GoodComponent2 />
            </ErrorBoundary>
        </div>
    )
}

ReactDOM.render(
    <div>
        <App />
    </div>,
document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <CheckboxWithLabel
//             labelOn="ON"
//             labelOff="OFF"
//         >Google</CheckboxWithLabel>
//     </div>,
// document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
