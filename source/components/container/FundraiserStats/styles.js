export default (props, traits) => {
  const { colors, rhythm } = traits

  return {
    root: {
      padding: rhythm(1),
      backgroundColor: colors.light
    }
  }
}
