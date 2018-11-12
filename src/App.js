import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import HelloWorld from './Components/HelloWorld/HelloWorld'

const theme = createMuiTheme()

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <HelloWorld />
  </MuiThemeProvider>,
  document.getElementById('app')
)
