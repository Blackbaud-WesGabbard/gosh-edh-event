export default (
  props,
  { colors, mediaQuery, opacity, rhythm, shadows, transitions }
) => ({
  wrapper: {
    marginBottom: rhythm(5)
  },
  mainLogo: {
    transition: transitions.easeOut,
    maxWidth: '175px'
  },
  root: {
    position: 'fixed',
    zIndex: 12,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.primary,
    color: colors.light,
    boxShadow: shadows.light,
    transition: transitions.easeOut,

    [mediaQuery('lg')]: {
      paddingTop: rhythm(0.25),
      paddingBottom: rhythm(0.25)
    }
  },
  content: {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexPack: 'justify'
    }
  }
})
