export default (props, traits) => {
  const { colors, measures, rhythm, scale } = traits

  return {
    root: {
      position: 'relative',
      maxWidth: '350px',
      textAlign: 'center'
    },

    dropzone: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexPack: 'center',
      flexDirection: 'column',
      height: rhythm(14),
      width: rhythm(14),
      padding: rhythm(2),
      backgroundColor: colors.shade,
      textAlign: 'center',
      lineHeight: measures.medium,

      '& p': {
        marginTop: rhythm(0.5),
        fontSize: scale(-1),
        opacity: 0.5
      }
    },

    clear: {
      marginTop: rhythm(0.5),
      fontSize: scale(-1),
      textDecoration: 'underline',
      opacity: 0.5
    },

    slider: {
      height: rhythm(0.5),
      maxWidth: 250,
      marginLeft: 50,
      marginTop: rhythm(1),
      marginBottom: rhythm(1),
      backgroundColor: colors.shade,
      borderRadius: rhythm(0.25)
    },

    sliderHandle: {
      height: rhythm(1),
      width: rhythm(1),
      backgroundColor: colors.primary,
      borderRadius: rhythm(0.5),
      transform: `translateY(${rhythm(-0.25)})`,
      cursor: 'pointer'
    },

    note: {
      maxWidth: rhythm(10),
      margin: `${rhythm(1)} auto`,
      fontSize: scale(-1),
      lineHeight: measures.medium,
      opacity: 0.5
    }
  }
}
