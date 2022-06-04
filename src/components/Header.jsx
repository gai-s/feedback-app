import React from 'react'
import PropTypes from 'prop-types'
import Logo from './assets/dorothy-parker1.png'

function Header({text, sub_text}) {
  return (
    <header>
      <div className="container">
          <h2>{text}</h2>
          <h2>{sub_text}
          <img src={Logo} alt="logo app" 
          style={{width:"50px", display:"inline-block", float:"left", margin:"0px"}}/>
          </h2>
          
      </div>
    </header>
  )
}

Header.defaultProps={
    text: 'umm not sure'
}

Header.propTypes={
    text: PropTypes.string,
}
export default Header
