import React from 'react'
import spinner from '../assets/waiting.gif'

function Spinner() {
  return (
    <img src={spinner} alt='loading...' 
    style={{width:'50%', margin:'auto', display:'block'}} />
  )
}
export default Spinner
