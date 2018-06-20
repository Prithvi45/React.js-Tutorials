import React from 'react';

const person = (props) => {
	return (<div>
		<p>My Name is {props.name}  Age:- {props.age} ,I am a Developer and i have  { Math.floor(Math.random() * 10) } years of experience</p>
		<p>{props.children}</p> 
		</div>);
	
};

export default person;