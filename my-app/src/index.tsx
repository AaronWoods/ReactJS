import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// properties routing - verbose syntax 
class Display extends React.Component<{ color: string, num:string, size:string }>{

    render(){
        return (
            <div>
                {this.props.color}
                {this.props.num}
                {this.props.size}
            </div>
        );
    }
}

// class Label extends React.Component<{ color: string, num:string, size:string }>{

//     render(){
//         return (
//             <div>
//                 <Display
//                     color={this.props.color}
//                     num={this.props.num}
//                     size={this.props.size}
//                 />
//             </div>
//         );
//     }
// }


class Label extends React.Component<{ color: string, num:string, size:string }>{

    render(){
        return (
            <div>
                <Display
                    {...this.props}
                />
            </div>
        );
    }
}


// class Shirt extends React.Component<{ color: string, num:string, size:string }>{

//     render(){
//         return (
//             <div>
                
//                 <Label
//                     color={this.props.color}
//                     num={this.props.num}
//                     size={this.props.size}
//                 />
                
//             </div>
//         );
//     }
// }

class Shirt extends React.Component<{ color: string, num:string, size:string }>{

    render(){
        return (
            <div>
                
                <Label
                    {...this.props}
                />
                
            </div>
        );
    }
}

class Store{
    constructor(public s:any){

    }   
}

// context object: sharing a theme
const ThemeContext = React.createContext(new Store("user1"));

class Button extends React.Component<any>{

    render(){
        return <div> {this.props.theme.s}</div>     
    }
}

class ButtonParent extends React.Component<any>{
    static contextType = ThemeContext;
    render(){
        return <Button theme={this.context}/>    
    }
}

class AppTut extends React.Component<any>{

    render(){
        return (
            <ThemeContext.Provider value={new Store("user1")}>
                <ButtonParent />
            </ThemeContext.Provider>
        )
    }
}

ReactDOM.render(
    <AppTut/>,
document.getElementById('container'));

// ReactDOM.render(
//     <Shirt
//         color="red"
//         num ="3.14"
//         size="big"
//     />,
// document.getElementById('container'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
