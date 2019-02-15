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

interface ITemperatureInput{
    scale:string;
    temperature:string;
    onTemperatureChange:(t:string) => void;
}

class TemperatureInp extends React.Component<ITemperatureInput>{

    constructor(props:ITemperatureInput){
        super(props);
        this.state = { temperature: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e:any){
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <div>
                Enter a temperature:
                <input value={temperature} onChange={this.handleChange}/>

            </div>
        )
    }  
}

function toCelcius(fahr:number) {
    return fahr*2;
}

function toFahr(celcius:number) {
    return celcius/2;
}

function tryConvert(temperature:string, convert:(n:number) => number) {
    const input = parseFloat(temperature);

    if(Number.isNaN(input)){
        return '';
    }

    return convert(input);
}

// We declare the parent component Calculator ready to share the state
class Calculator extends React.Component<any, {temperature:string, scale:string}>{
    constructor(props:any){
        super(props);

        this.handleFahrChange = this.handleFahrChange.bind(this);
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        
        this.state = {temperature:'', scale:'c'}

        
    }

    handleFahrChange(temperature:string){
           this.setState({scale:'c', temperature}) 
    }

    handleCelciusChange(temperature:string){
        this.setState({scale:'f', temperature}) 
    }

    render(){

        const temperature = this.state.temperature;
        const scale = this.state.scale;

        const celcius = scale === 'c' ? tryConvert(temperature, toFahr) : temperature;
        const fahr = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;

        return (
            <div>
                <TemperatureInp 
                    scale='c'
                    temperature={celcius.toString()}
                    onTemperatureChange={this.handleCelciusChange}
                />

                <TemperatureInp 
                    scale='f'
                    temperature={fahr.toString()}
                    onTemperatureChange={this.handleFahrChange}
                />
                

                <PrintOutcome 
                    celcius={parseFloat(celcius.toString())} />

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
