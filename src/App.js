import React, { Component } from 'react'

import './App.css'

import Header from './Header'
import Paragraph from './Paragraph'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Paragraph />
      </div>
    )
  }
}

export default App
