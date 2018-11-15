export default (props, traits) => {
  const { rhythm } = traits

  return {
    image: {
      maxHeight: rhythm(3),
      marginBottom: rhythm(0.5)
    }
  }
}
