export default (props, traits) => {
  const { colors, mediaQuery, rhythm } = traits

  return {
    root: {
      backgroundColor: colors.light,

      [mediaQuery('md', 'max-width')]: {
        marginTop: rhythm(3)
      }
    },

    content: {
      transform: `translateY(${rhythm(-3)})`
    },

    metric: {
      root: {
        marginTop: rhythm(0.5)
      }
    }
  }
}
