export default (props, { mediaQuery }) => ({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  donate: {
    '& > a': {
      marginTop: '1em'
    },

    [mediaQuery('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& > a': {
        marginTop: '0em'
      }
    }
  }
})
