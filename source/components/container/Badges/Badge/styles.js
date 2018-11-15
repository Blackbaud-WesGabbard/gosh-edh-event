export default (props, traits) => {
  const { rhythm, scale } = traits

  return {
    root: {
      textAlign: 'center'
    },

    badge: {
      height: rhythm(4)
    },

    title: {
      fontSize: scale(1)
    }
  }
}
