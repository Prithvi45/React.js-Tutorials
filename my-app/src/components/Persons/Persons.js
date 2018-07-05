import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {


  constructor(props) {
    super(props)
    console.log("[Persons.js] Inside constructor", props)
  } 


  componentWillMount() {
    console.log("[Persons.js] ComponentWillMount")
  }

  componentDidMount (){
    console.log("[Persons.js] componentDidMount")
  }

  componentWillReceiveProps (nextProps) {
    console.log("[Persons.js] Inside componentWillReceiveProps",nextProps)
  }

  shouldComponentUpdate (nextProps) {
  	console.log("[Persons.js] Inside shouldComponentUpdate",nextProps)
  	return true;
  	// false : component will not get updated
  }

  componentWillUpdate(nextProps, nextstate) {
  	console.log("[Persons.js] Inside componentWillUpdate",nextstate ,nextProps)
  }

  componentDidUpdate (){
  	console.log("[Persons.js] Inside componentDidUpdate")
  }

     render() {
     	console.log("[Persons.js] Inside render()")
        return this.props.persons.map( ( person, index ) => {
        return <Person
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={( event ) => this.props.changed( event, person.id )} />

       } );	 
     }

}


export default Persons;