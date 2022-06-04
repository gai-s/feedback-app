import React from 'react'
import PropTypes from 'prop-types'

function Button({children,version,type,isDisabled}) {
  return (
    <button 
        className={`btn btn-${version}`}
        type={type}
        disabled={isDisabled}>
        {children}  
    </button>
  )
}
Button.defaultProps={
    type:"button",
    version:"primary",
    isDisabled:false,
}

Button.propTypes={
    children:PropTypes.node.isRequired,
    type:PropTypes.string,
    version:PropTypes.string,
    isDisabled:PropTypes.bool,
}
export default Button
