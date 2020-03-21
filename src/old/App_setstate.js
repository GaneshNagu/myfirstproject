import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
 
class App extends Component {
  state={
    persons: [
      {name:'nag',age:29},
      {name:"nagAnna",age:30},
      {name:"nagtham",age:24}
    ]
  }
  switchNamehandler=()=>{

    // alert("button clicked");
    this.setState({
      persons:[
        {name:"nagaraju",age:30},
        {name:"Kathikantaram",age:21},
        {name:"vibhushan",age:19}
      ]

    });


  }

  render(){
    return   (
    <div className="App">
      <button onClick={this.switchNamehandler}>click me</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
   </div>
    );
  }
}
//// React.createElement("div",{className:"App"},React.createElement("h1",null,"Greatest Developer in the World"),React.createElement("h1",{className:"borderclass"},"Prove them wrong"),React.createElement("h1",{className:"borderclass"},"I will become the top notch Developer"));
export default App;
