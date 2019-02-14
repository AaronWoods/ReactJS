import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Component2 } from './tests/components/Component2';

// simple component - dealing with children
class Startup extends React.Component<{ greetTarget: string }>{
    
    constructor(props: { greetTarget: string }){
        super(props);
        //this.props.greetTarget ="";
    }
    render(){
        console.log("in render")
        
        return(
            <div>
                <p>Simple Render {this.props.greetTarget}</p>
                {this.props.children}
            </div>
        );
    }
}

// summary about what a component can contain 
type Props = {
    label: string, //  label?: string  NOT MANDATORY
    initialCount:number;
}

type State = {
    count:number;
}

class SummaryComp extends React.Component<Props, State> {
    
    //class properties: defaultProps
    static defaultProps = {
        label:"label1",
        initialCount:0                  // do not set default for mandatory props
    }

    constructor(props:Props){
        super(props);              // props readonly
        this.state = { count:0 }   // this.setstate outsitde of constructor //state readable and writeable
    }

    render(){
        console.log("in render")
        
        return(
            <div>
                <p>Simple Render 
                    {this.props.label}
                    {this.props.initialCount}
                    {this.state.count}
                </p>
                {this.props.children}
            </div>
        );
    }
}

// cut down the boilerplate code
function Welcome(props:any) {
    return <h1>{props.name}</h1>
}

// design pattern: composability
function AppTut() {
    return (
        <div>
            <Welcome name="user1"/>
            <Welcome name="user2"/>
            <Welcome name="user3"/>
        </div>
    );
}

// it is difficult to identify the resuable parts
function formatDate(date:Date) {
    return date.toLocaleDateString();
}

interface ComplexProps {
    date:Date;
    text:string;
    author:{
        name:string;
        avatarUrl:string;
    }
}

function Comment(props:ComplexProps) {
    return(
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={ props.author.avatarUrl}/>

                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>

            <div className="Comment-text">
                {props.text}
            </div>

            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
            
        </div>
    );
}

const comment = {
    date: new Date(),
    text: "simple message",
    author: {
        name: "user1",
        avatarUrl: "https://image"
    }
}

ReactDOM.render(
        <div>
            <Component2/>
        </div>,
    document.getElementById('container'));

// ReactDOM.render(
//     <div>
//         <Comment
//             date={comment.date}
//             text={comment.text}
//             author={comment.author}
//         />
//     </div>,
// document.getElementById('container'));

// ReactDOM.render(
//     <div>
//         <AppTut/>
//     </div>,
// document.getElementById('container'));

// ReactDOM.render(
//     <div>
//         <Welcome 
//             name="Aaron"/>
//     </div>,
// document.getElementById('container'));

// ReactDOM.render(
//     <div>
//         <SummaryComp 
//             label="label100"/>
//     </div>,
// document.getElementById('container'));


// ReactDOM.render(
// <div>
// <Startup greetTarget="user1">
//     SIMPLE CONTENT2
// </Startup>
// <Startup greetTarget="user2">
//     <input type="button" value="Click please"/>
// </Startup>
// <Startup greetTarget="user3">
//     SIMPLE CONTENT3
// </Startup>

// </div>, 
// document.getElementById('container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
