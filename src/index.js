// Import the React and ReactDOM libraries
// import: We want to get code from some other file or dependency
// React: the variable we want to assign this import to
// from: 
// 'react' the name of the dependency or path to the file we are importing
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function getButtonText(){
    return 'botoncito D'
}

// Create a react component
const App = () => {
  const buttonText = {name: 'pamela'};
  return (
  <div>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor:'blue' , color: 'white'}}>{buttonText.name}</button>
  </div>);
};

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
// component to be rendered
// 2nd argument: Dom element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
