import React, { Component } from 'react'

import HeaderModern from '../HeaderModern'
import Paragraph from '../Paragraph'
import InputText from '../InputText'

import './index.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderModern />
        <Paragraph />
        <InputText />
      </div>
    )
  }
}

export default App
