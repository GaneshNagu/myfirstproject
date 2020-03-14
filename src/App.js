import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return   (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>   
   </div>
   );
}
//// React.createElement("div",{className:"App"},React.createElement("h1",null,"Greatest Developer in the World"),React.createElement("h1",{className:"borderclass"},"Prove them wrong"),React.createElement("h1",{className:"borderclass"},"I will become the top notch Developer"));
export default App;
