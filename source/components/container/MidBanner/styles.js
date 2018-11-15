export default (props, { colors, scale, mediaQuery }) => {
  const { image = {} } = props

  return {
    root: {
      display: 'flex',
      backgroundImage: `url(${image.url})`,
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: colors.dark,
      height: '70vw',
      maxHeight: '570px',
      minHeight: '400px',
      '& > *': {
        flex: '0 0 100%'
      }
    },

    overlay: {
      opacity: 0.9,
      backgroundColor: `${colors.light}`,
      padding: '35px 35px 25px',
      marginTop: '9%',
      maxWidth: '100%',
      [mediaQuery('sm')]: {
        maxWidth: '45vw'
      }
    },

    title: {
      fontSize: scale(3),
      fontWeight: 'bold',
      paddingBottom: '10px'
    }
  }
}
