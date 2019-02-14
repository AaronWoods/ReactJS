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




ReactDOM.render(
    <Shirt
        color="red"
        num ="3.14"
        size="big"
    />,
document.getElementById('container'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
