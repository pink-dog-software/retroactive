import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import colors from '../constants/colors'

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: colors.primary
    },
    secondary: {
      main: '#000'
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.darkBrown
    },
    background: {
      default: colors.darkBrown
    },
    green: {
      light: colors.paleGreenLight,
      main: colors.paleGreen,
      dark: colors.paleGreenDark
    },
    yellow: {
      light: colors.creamLight,
      main: colors.cream,
      dark: colors.creamDark
    },
    red: {
      light: colors.salmonLight,
      main: colors.salmon,
      dark: colors.salmonDark
    }
  },
  typography: {
    fontSize: 16
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {}
})
