export default (
  { preview = {} },
  { colors, rhythm, treatments, mediaQuery }
) => {
  const redCorner = {
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '70px',
    height: '70px',
    boxShadow: `inset 12px 12px 0px 0px rgba(${colors.redRGB},1)`
  }

  return {
    contentSection: {
      position: 'relative',
      backgroundColor: `${colors.light}`,
      marginRight: 0,
      marginBottom: rhythm(1),
      padding: '20px 10px 10px',
      [mediaQuery('lg')]: {
        marginRight: rhythm(2.25),
        marginBottom: 0
      },
      '&:before': {
        [mediaQuery('lg')]: {
          ...redCorner,
          top: '-20px',
          left: '-20px'
        }
      },
      [mediaQuery('sm')]: {
        padding: '40px 30px 30px'
      }
    },

    videoSection: {
      position: 'relative',
      '&:after': {
        [mediaQuery('lg')]: {
          ...redCorner,
          bottom: '-20px',
          right: '-20px',
          transform: 'rotate(180deg)'
        }
      }
    },

    preview: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexPack: 'center',
      cursor: 'pointer',
      height: '100%',
      minHeight: rhythm(12),
      color: colors.light,
      backgroundImage: `url(${preview.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexPack: 'center',
      height: rhythm(3),
      width: rhythm(3),
      border: `3px solid ${colors.light}`,
      borderRadius: '50%'
    },

    video: {
      position: 'relative',

      ':before': {
        content: '',
        display: 'block',
        paddingBottom: '56.25%'
      },

      '> *': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        iframe: {
          width: '100%',
          height: '100%'
        }
      }
    }
  }
}
