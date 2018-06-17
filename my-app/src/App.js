import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1> Hi , i am Prithviraj ! </h1>
    //   </div>
    // );
    return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi i\'m Prithviraj!'));
  }
}


export default App;
