import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppBar from '../Atoms/AppBar/AppBar'
import Board from '../Pages/Board/Board'
import theme from './App.theme'

console.log(theme)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar />
    <Board />
  </MuiThemeProvider>,
  document.getElementById('app')
)
