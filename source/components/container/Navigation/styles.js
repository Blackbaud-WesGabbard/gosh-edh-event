export default (
  { toggled },
  { colors, mediaQuery, rhythm, scale, shadows, transitions }
) => ({
  toggle: {
    [mediaQuery('lg')]: {
      display: 'none'
    }
  },

  nav: {
    [mediaQuery('lg', 'max-width')]: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      height: `calc(100vh - ${rhythm(5)})`,
      overflow: 'auto',
      padding: rhythm(1),
      backgroundColor: colors.primary,
      color: colors.light,
      borderTop: `1px solid ${colors.shade}`,
      boxShadow: shadows.bottom,
      transition: transitions.easeOut,
      visibility: toggled ? 'visible' : 'hidden',
      opacity: toggled ? 1 : 0
    },

    [mediaQuery('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      paddingTop: rhythm(0.5),
      margin: rhythm(-0.5),
      '& > *': {
        margin: rhythm(0.5)
      }
    }
  },

  links: {
    margin: rhythm(-0.25),

    '& li': {
      display: 'block',
      padding: rhythm(1),
      fontWeight: 'bold'
    },

    [mediaQuery('lg')]: {
      display: 'flex',
      alignItems: 'center',

      '& li': {
        padding: 0,
        paddingLeft: rhythm(0.75),
        marginLeft: rhythm(0.75),
        borderLeft: '1px solid white',
        lineHeight: '1'
      },

      '& li:first-child': {
        borderLeft: '0px none'
      }
    }
  },

  ctas: {
    paddingTop: rhythm(0.25),
    margin: rhythm(-0.25),

    '& li': {
      display: 'block',
      padding: rhythm(0.25)
    },

    [mediaQuery('lg')]: {
      paddingTop: 0,
      marginTop: rhythm(-2),
      display: 'flex',
      alignItems: 'center'
    }
  }
})
