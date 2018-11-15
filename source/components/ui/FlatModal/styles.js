export default (props, { colors, rhythm }) => ({
  root: {
    wrapper: {
      content: {
        borderWidth: 0,
        borderRadius: 0
      }
    },

    close: {
      height: rhythm(1.25),
      width: rhythm(1.25),
      borderRadius: '50%',
      textAlign: 'center',
      backgroundColor: colors.light,
      color: colors.dark
    }
  }
})
