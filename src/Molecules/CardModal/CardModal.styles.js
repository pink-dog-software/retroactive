export default theme => ({
  paper: {
    position: 'absolute',
    boxShadow: theme.shadows[5],
    margin: '4% 7% 7% 7%',
    width: '86%',
    height: '89%',
    padding: theme.spacing.unit * 4,
    borderRadius: '4px',
    outline: 'none'
  },
  closeButton: {
    float: 'right',
    borderRadius: '2px',
    padding: theme.spacing.unit,
    marginTop: `-${theme.spacing.unit * 3}px`,
    marginRight: `-${theme.spacing.unit * 3}px`
  },
  saveTextButton: {
    float: 'right',
    marginRight: theme.spacing.unit
  },
  label: {
    margin: theme.spacing.unit
  },
  text: {
    margin: theme.spacing.unit,
    borderRadius: '4px',
    width: `calc(100% - ${theme.spacing.unit * 2}px)`
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
  greenModal: {
    backgroundColor: theme.palette.green.main
  },
  yellowModal: {
    backgroundColor: theme.palette.yellow.main
  },
  redModal: {
    backgroundColor: theme.palette.red.main
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
        paper: classes.greenModal,
        textfield: classes.textGreen,
        outline: classes.outlineGreen
      }
    case 1:
      return {
        paper: classes.yellowModal,
        textfield: classes.textYellow,
        outline: classes.outlineYellow
      }
    case 2:
      return {
        paper: classes.redModal,
        textfield: classes.textRed,
        outline: classes.outlineRed
      }
    default:
      return {}
  }
}
