import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from './Atoms/AppBar/AppBar'
import Board from './Pages/Board/Board'
import colors from './constants/colors'

const { primary, textPrimary, darkBrown } = colors

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: '#000'
    },
    text: {
      primary: textPrimary,
      secondary: darkBrown
    },
    background: {
      default: darkBrown
    }
  },
  typography: {
    fontSize: 16
  }
})

console.log(theme)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar />
    <Board />
  </MuiThemeProvider>,
  document.getElementById('app')
)
