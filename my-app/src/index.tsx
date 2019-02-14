import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Startup extends React.Component{
    render(){
        console.log("in render")
        
        return(
            <p>Simple Render</p>
        );
    }
}

ReactDOM.render(
<div>
<Startup />
<Startup />
<Startup />
</div>, 
document.getElementById('container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
