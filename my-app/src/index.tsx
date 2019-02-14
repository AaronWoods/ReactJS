import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// state is private, not shared
// initialize state in constructor

class LightingCounter extends React.Component<any,any>{
    timerId:any;

    constructor(props:any){
        super(props);

        // we init state only in the constructor
        //state readable and writable
        this.state = { strikes:0 }

    }

    timerTick(){
        this.setState((prevState:any, props:any) => ( {
                strikes: prevState.strikes + props.increment
            }
        ))
    }

    //lifecycle methods
    componentWillMount(){
        console.log("in mounted");

        //temporization
        this.timerId = setInterval(() => this.timerTick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    

    

    render(){
        console.log("render");
        return <h1>{this.state.strikes}</h1>
    }
    
    
}

class LightingCounterParent extends React.Component{
    render(){
        return <LightingCounter increment={5}/>
    }
    
    
}

ReactDOM.render(
    <div>
        <LightingCounterParent/>
    </div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
