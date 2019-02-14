import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(
<div>
<Startup greetTarget="user1">
    SIMPLE CONTENT2
</Startup>
<Startup greetTarget="user2">
    <input type="button" value="Click please"/>
</Startup>
<Startup greetTarget="user3">
    SIMPLE CONTENT3
</Startup>

</div>, 
document.getElementById('container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
