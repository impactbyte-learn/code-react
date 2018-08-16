import React from 'react'

import './index.css'

import Title from '../Title'

const Header = props => (
  <header className="header">
    <Title color="blue">Welcome to {props.app}!</Title>
  </header>
)

export default Header
