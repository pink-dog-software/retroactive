import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'

const CustomIconButton = ({ children, ...props }) => {
  return <IconButton {...props}>{children}</IconButton>
}

CustomIconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disableRipple: PropTypes.bool
}

CustomIconButton.defaultProps = {
  disableRipple: true
}

export default CustomIconButton
