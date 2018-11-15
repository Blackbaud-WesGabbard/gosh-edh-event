export default (props, { rhythm, colors }) => ({
  footer: {
    padding: rhythm(1),
    textAlign: 'center',
    '& a': {
      color: colors.primary
    }
  }
})
