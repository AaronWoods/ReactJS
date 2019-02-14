// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// //ReactDOM.render(<App />, document.getElementById('root'));
// //ReactDOM.render(<h1>Startup</h1>, document.getElementById('container'));

// // Introduction to JSX
// interface User{
//     firstName: string,
//     lastName: string
// }

// function formatName(user:User) {
//     return user.firstName + ", " + user.lastName;
// }

// //conditional rendering
// function getStartup(user:User){
//     if (user) {
//         return <div>{ formatName(user) }</div>
//     }
//     else{
//         return <div>Stranger</div>
//     }
// }
// const user:User = {
//     firstName:"Aaron",
//     lastName:"Woods"
// }

// const element = (
//     <h1>
//         { getStartup(user) }
//     </h1>
// )

// // controlling attribute values using JSX
// const element1 = <div tabIndex={0}>{user.firstName}</div>
// const element2 = <img src={user.firstName}/>
// const element3 = (
//     <div>
//         <div>a</div>
//         <div>b</div>
//     </div>
// );

// // JSX prevents injection attacks
// const title ='<div>ok</div>'
// const element4 = <h1>{title}</h1>

// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(element4, document.getElementById('container'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
