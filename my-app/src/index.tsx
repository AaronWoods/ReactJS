import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

// lift the state up: where to declare the state 
function PrintOutcome(props:{celcius:number}) {
    if (props.celcius >100) {
        return <p>The water will boil</p>
    }

    return <p>The water would NOT boil</p>
}

class Calculator extends React.Component<any, { temperature:string }>{

    constructor(props:any){
        super(props);
        this.state = { temperature: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:any){
        this.setState( { temperature: e.target.value })
    }

    render(){
        const temperature = this.state.temperature;
        return (
            <div>
                Enter a temperature:
                <input value={temperature} onChange={this.handleChange}/>
                <PrintOutcome celcius={parseFloat(temperature)} />
            </div>

        )
    }
    
}

ReactDOM.render(
    <div>
        <Calculator />
    </div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
