export default (props, traits) => {
  const { maxHeight, maxWidth, styles } = props

  const { rhythm } = traits

  return {
    root: {
      maxHeight: maxHeight && rhythm(maxHeight),
      maxWidth: maxWidth && rhythm(maxWidth),
      ...styles
    }
  }
}
