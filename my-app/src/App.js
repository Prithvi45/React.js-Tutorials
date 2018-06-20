import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
  	return (
       <div className="App">
       <h2> Hi , i am Prithviraj</h2>
       <Person />

       </div>
      );
  };
};


export default App;