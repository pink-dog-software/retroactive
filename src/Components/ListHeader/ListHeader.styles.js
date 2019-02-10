export default theme => ({
  card: {
    minWidth: 275,
    margin: theme.spacing.unit,
    marginBottom: 0,
    textAlign: 'center'
  },
  content: {
    display: 'flex',
    padding: theme.spacing.unit,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:last-child': {
      paddingBottom: theme.spacing.unit
    }
  },
  title: {
    lineHeight: 'normal'
  },
  iconButton: {},
  addIcon: {
    height: '2rem',
    width: '2rem',
    lineHeight: 'normal'
  }
})
