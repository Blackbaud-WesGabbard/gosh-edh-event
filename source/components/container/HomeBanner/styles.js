export default (props, { colors, scale, mediaQuery }) => {
  return {
    h1: {
      fontWeight: 'bold',
      fontSize: `calc(${scale(5)} + 2vw)`,
      lineHeight: `calc(${scale(6)} + 2vw)`,
      marginLeft: '-5px',
      '& > span': {
        color: `${colors.red}`
      }
    },

    subtitle: {
      fontSize: scale(3),
      fontWeight: 'bold',
      paddingBottom: '10px'
    },
    button: {
      fontWeight: 'bold'
    }
  }
}
