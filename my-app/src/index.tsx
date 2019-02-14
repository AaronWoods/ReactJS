import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';


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


//pure components - we can have a degree of control on the re-render of component
//function cant have a state 
//no lifecycle hooks

function MyPureComponent1(props: {username:string}){
    console.log("in render");
    return <div>{props.username}</div>
}

function areEqual(prevProps:{username:string}, newProps:{username:string}){
    console.log("in areEqual");
    return false;
}

class ParentComp extends React.Component<any,{username:string}>{
    constructor(props:{username:string}){
        super(props)
        this.state = {username: "user1"}
        this.mycomp = React.memo(MyPureComponent1, areEqual); //component def, not instance
    }
    mycomp:any;

    componentDidMount(){
        console.log("in componentDidMount");
        this.setState((prevState, prevProps) => {
            return  {username : "newval" }
        })
    };
    render(){
        return (
            <this.mycomp username={this.state.username}/>
        )
    }
}

ReactDOM.render(
    <div>
        <ParentComp />
    </div>,
document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <LightingCounterParent/>
//     </div>,
// document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
