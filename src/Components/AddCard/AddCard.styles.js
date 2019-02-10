export default theme => ({
  card: {
    minWidth: 275,
    margin: theme.spacing.unit
  },
  content: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: '0px'
  },
  text: {
    marginTop: '0px',
    marginBottom: '0px',
    borderRadius: '4px',
    width: '100%'
  },
  actions: {
    float: 'right',
    marginBottom: theme.spacing.unit
  },
  saveTextButton: {
    float: 'right',
    marginRight: theme.spacing.unit
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderWidth: '2px'
    },
    color: theme.palette.text.secondary
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: '0px'
  },
  textGreen: { backgroundColor: theme.palette.green.light },
  textYellow: { backgroundColor: theme.palette.yellow.light },
  textRed: { backgroundColor: theme.palette.red.light },
  outlineGreen: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.green.dark} !important`
    }
  },
  outlineYellow: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.yellow.dark} !important`
    }
  },
  outlineRed: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.red.dark} !important`
    }
  }
})

export const getColumnClasses = (column, classes) => {
  switch (column) {
    case 0:
      return {
        textfield: classes.textGreen,
        outline: classes.outlineGreen
      }
    case 1:
      return {
        textfield: classes.textYellow,
        outline: classes.outlineYellow
      }
    case 2:
      return {
        textfield: classes.textRed,
        outline: classes.outlineRed
      }
    default:
      return {}
  }
}
