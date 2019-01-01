import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disableRipple: PropTypes.bool
}

CustomButton.defaultProps = {
  disableRipple: true
}

export default CustomButton
