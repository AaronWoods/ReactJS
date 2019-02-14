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

        console.log("In Constructor");
    }

    componentWillMount(){
        console.log("Will Mount");
    }

    componentDidMount(){
        //scheduling some logic
        
        console.log("Did Mount");

        // we need a reference to native DOM fragment
        console.log("DOM node:" + ReactDOM.findDOMNode(this));
    }

    // updating phase: componentWillReceiveProps + shouldComponentUpdate + componentWillUpdate + render + componentDidUpdate 

    componentWillReceiveProps(nextProps : {time:string}){
        console.log("Will Receive: " + nextProps.time);
    }

    shouldComponentUpdate(nextProps: {time:string}, nextState:{}){
        console.log("Should Update");
        return true;
    }

    componentWillUpdate(prevProps: {time:string}, prevState:{}){
        console.log("Will Update");
    }

    componentDidUpdate(prevProps: {time:string}, prevState:{}){
        console.log("Did Update");
    }

    
    render(){
        console.log("In render");
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
        this.launchClock();
    }

    launchClock(){
        setInterval(() => {
            this.setState({currentTime:new Date().toLocaleDateString()  })
        }, 1000);
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
