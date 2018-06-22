import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
	state = {
		persons:[
        {id:'1', name :'Prithviraz', age:23 },
        {id:'2', name: 'raj',age:24},
        {id:'3', name: 'vaibhav', age:22},
		],
		showPersons : false
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

	deletePersonHandler = (PersonIndex) =>{
		const persons = this.state.persons.slice();
		persons.splice(PersonIndex,1)
		this.setState({persons:persons})

	};

    nameChangeHandler= (event, id) =>{
        const personIndex = this.state.persons.findIndex( p => {
        	return p.id === id;
        });

        const person ={ 
        	...this.state.persons[personIndex]
        }
           ///create new object as object in js is reference type 

        person.name = event.target.value;
        const persons = [...this.state.persons]
        persons[personIndex] = person;     
        
        this.setState ( {persons:persons}
		) 


    };

    togglePersonsHandler = () =>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }


  render() {

  	const style = {
  		backgroundColor: 'green',
  		color : 'white',
  		font : 'inherit',
  		border : '1 solid blue',
  		padding : '8px',
  		cursor : 'pointer',
  	}

  	let person = null;

  

  	if (this.state.showPersons)
  	{
  		person = (

  	    <div>       
        { this.state.persons.map((person, index) => {
        	return <Person name={person.name} age={person.age} key={person.id}click={()=>this.deletePersonHandler(index)}  
            changed={(event) =>this.nameChangeHandler(event,person.id)}
        	/> 
            })
		}
        </div>
  			);
        style.backgroundColor='red';
        style[':hover'] = {
        	backgroundColor :'salmon',
        	color :'white'
        }

  	}
    // let classes = ['red','bold'].join(' ')  
    let classes = [];
    if (this.state.persons.length <=2){
    	classes.push('red');
    	}
    if (this.state.persons.length <=1){
    	classes.push('red bold');
    }	
  	return (
  		
       <div className="App">
       <h2 className={classes.join(' ')}> Hi , i am Prithviraj</h2>
       <Person name="Prithvi" age="23" />

       <button 
       style={style}
       onClick={this.togglePersonsHandler}  >Switch Name</button>
      
         {person}

       </div>
      );
  };
};


export default App;