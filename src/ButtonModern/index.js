import React from 'react'

import './index.css'

const ButtonModern = ({ type, color, children }) => {
  let styles

  if (type) styles = `btn btn-${type}`
  else if (color) styles = `${color}`

  return <button className={styles}>{children}</button>
}

export default ButtonModern
