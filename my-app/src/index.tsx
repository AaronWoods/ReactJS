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

ReactDOM.render(
    <div>
        <CheckboxWithLabel
            labelOn="ON"
            labelOff="OFF"
        >Google</CheckboxWithLabel>
    </div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
