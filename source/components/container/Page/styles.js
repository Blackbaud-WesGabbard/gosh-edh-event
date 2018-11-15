export default (
  { textAlign = 'inherit' },
  { rhythm, scale, shadows, mediaQuery }
) => ({
  container: {
    root: {
      borderRadius: rhythm(0.25),
      textAlign
    },
    outer: {
      [mediaQuery('sm')]: {
        padding: rhythm(1)
      }
    }
  },
  heading: {
    textAlign: 'center',
    fontSize: scale(3),
    marginBottom: rhythm(1.5)
  }
})
