import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import './Card.css';
import CardContainer from './cards/CardContainer'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
       <Header/>
        <div className='content-wrapper'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default App;
