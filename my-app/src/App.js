import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons:[
        {name :'Prithviraz', age:23 },
        {name: 'raj',age:24}
		]
	}

	switchNameHandler =() =>{
		this.setState ( 
		{
			persons:[
            {name :'Updated Prithviraz', age:23 },
            {name: 'updated raj',age:24}
		    ]
		}
		)
	};
  render() {
  	return (
       <div className="App">
       <h2> Hi , i am Prithviraj</h2>
       <Person name="Prithvi" age="23" />

       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name="Prithviraj" age="24"> My hobbies : watching cricket</Person>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>

       </div>
      );
  };
};


export default App;