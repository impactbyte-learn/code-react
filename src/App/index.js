import React, { Component } from 'react'

import HeaderModern from '../HeaderModern'
import Paragraph from '../Paragraph'
import InputText from '../InputText'
import Footer from '../Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      app: `Code ReactJS`
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderModern app={this.state.app} />
        <Paragraph />
        <InputText />
        <Footer app={this.state.app} />
      </div>
    )
  }
}

export default App
