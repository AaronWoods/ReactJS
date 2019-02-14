import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';

/** 
 * mounting phase
 * updating phase
 * unmounting phase
*/

class Logger extends React.Component<{time:string}> {
    // mounting phase - constructor + componentWillMount + render + componentDidMount
    constructor(props : {time:string}) {
        super(props);

        console.log("in constructor");
    }

    componentWillMount(){
        console.log("will mount");
    }

    componentDidMount(){
        //scheduling some logic
        
        console.log("did mount");

        // we need a reference to native DOM fragment
        console.log("DOM node:" + ReactDOM.findDOMNode(this));
    }

    render(){
        console.log("in render");
        return (
            <div>
                {this.props.time}
            </div>
        )
    }
}

class LoggerParent extends React.Component<any,{currentTime:string}> {
    constructor(props:any){
        super(props);
        this.state = {currentTime:new Date().toLocaleDateString() }
    }
    
    render(){
        return (
            <Logger time={this.state.currentTime} />
        )
    }
}

ReactDOM.render(
    <div>
        <LoggerParent />
    </div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
