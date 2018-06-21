import React from 'react';
import './Person.css' 
const person = (props) => {
	return (<div className="Person">
		<p onClick={props.click}>My Name is <b>{props.name}</b>  Age:- <b>{props.age}</b> ,I am a Developer and i have  { Math.floor(Math.random() * 10) } years of experience</p>
		<p>{props.children}</p> 

		<input type="text" onChange={props.changed} value={props.name}/>
		</div>);
	
};

export default person;