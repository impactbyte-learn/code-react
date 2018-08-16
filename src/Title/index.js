import React from 'react'

import randomColor from 'random-color'
import styled from 'styled-components'

const Title = ({ color, children }) => {
  const rc = randomColor()
  const H1 = styled.h1`
    color: ${rc.hexString()};
  `

  return <H1>{children}</H1>
}

export default Title
