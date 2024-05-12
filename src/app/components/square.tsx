import React, {useState} from 'react'
type data={
    value: string
    onSquareClick: ()=>void
}
function Square({value, onSquareClick}:data) {
 
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  )
}

export default Square