export default (props, traits) => {
  const { rhythm } = traits

  return {
    root: {
      padding: `${rhythm(0.5)} ${rhythm(1)}`
    }
  }
}
