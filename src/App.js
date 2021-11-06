import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
export default class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <News/>
      </div>
    )
  }
}


// ba327cfdf2e44bd296a8c5fb9ca602f5