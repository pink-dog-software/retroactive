import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

import store from '../store'
import AppBar from '../Components/AppBar'
import Board from '../Pages/Board/ConnectedBoard'
import theme from './App.theme'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Board />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
