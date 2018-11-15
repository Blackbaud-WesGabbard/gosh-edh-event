export default (props, traits) => {
  const { measures, rhythm } = traits

  return {
    textarea: {
      field: {
        height: rhythm(14),
        lineHeight: measures.medium
      }
    }
  }
}
