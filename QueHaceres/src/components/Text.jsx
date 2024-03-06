import React from 'react'

const Text = ({lineTrough,textoo}) => {
  return (
    <p style={{textDecorationLine:lineTrough}}>{textoo}</p>
  )
}

export default Text