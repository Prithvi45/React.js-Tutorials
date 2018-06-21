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

	switchNameHandler =(newName) =>{
		this.setState ( 
		{
			persons:[
            {name :'Updated Prithviraz', age:23 },
            {name: newName,age:24}
		    ]
		}
		)
	};

    nameChangeHandler= (event) =>{
        this.setState ( 
		{
			persons:[
            {name :'Updated Prithviraz', age:23 },
            {name: event.target.value,age:24}
		    ]
		}
		) 


    };



  render() {

  	const style = {
  		backgroundColor: 'white',
  		font : 'inherit',
  		border : '1 solid blue',
  		padding : '8px',
  		cursor : 'pointer',
  	}

  	return (
       <div className="App">
       <h2> Hi , i am Prithviraj</h2>
       <Person name="Prithvi" age="23" />

       <button 
       style={style}
       onClick={this.switchNameHandler.bind(this, "New Prithvi")}  >Switch Name</button>
       <Person name="Prithviraj" age="24"> My hobbies : watching cricket</Person>

       <Person name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, "raj")}/> 

       <Person name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed={this.nameChangeHandler}
        />

       </div>
      );
  };
};


export default App;