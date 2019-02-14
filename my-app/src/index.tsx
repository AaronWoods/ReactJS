import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Letter extends React.Component<{bgColour:string}>{
    
    render(){

        let letterStyle= {
            padding: 10,
            margin: 10,
            fontSize: 30,
            backgroundColor: this.props.bgColour, //"#ffde00",
            display: "inline-block"
        }
        return <div
            style = {
                letterStyle
            }
        >
        {this.props.children}</div>
    }
}

ReactDOM.render(
    <div>
        <Letter bgColour="yellow">A</Letter>
        <Letter bgColour="blue">B</Letter>
        <Letter bgColour="red">C</Letter>
    </div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
