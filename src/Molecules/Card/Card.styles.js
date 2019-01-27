export default theme => ({
  card: {
    minWidth: 275,
    margin: theme.spacing.unit,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    zIndex: 1
  },
  content: {
    width: '100%'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 18
  },
  likes: {
    paddingLeft: theme.spacing.unit
  },
  button: {
    zIndex: 10,
    marginLeft: '0px'
  },
  actions: {
    paddingLeft: '0px'
  }
})
