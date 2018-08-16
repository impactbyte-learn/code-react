import React from 'react'

import './index.css'

const Header = props => (
  <header className="header">
    <h1 className="title">Welcome to {props.app}!</h1>
  </header>
)

export default Header
