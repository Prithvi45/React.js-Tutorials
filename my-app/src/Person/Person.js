import React from 'react';
import './Person.css' ;
import Radium from 'radium';

const person = (props) => {
	const style = {
		'@media(min-width:500px)':{
       width : '450px'

		}
	}
	return (<div className="Person" style={style}>
		<p onClick={props.click}>My Name is <b>{props.name}</b>  Age:- <b>{props.age}</b> ,I am a Developer and i have  { Math.floor(Math.random() * 10) } years of experience</p>
		<p>{props.children}</p> 

		<input type="text" onChange={props.changed} value={props.name}/>
		</div>);
	
};

export default Radium(person);